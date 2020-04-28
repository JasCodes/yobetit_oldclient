import { observable, action, reaction, toJS } from 'mobx'
import axios from 'axios'
import { Search, AllSubstringsIndexStrategy } from 'js-search'
// import axiosRetry from 'axios-retry'

// axiosRetry(axios, { retries: Infinity })

export interface CountryProp {
  name: string
  flag: string
  altSpellings?: string[]
  alpha2Code?: string
  alpha3Code?: string
  demonym?: string
  translations?: {}
  currencies: {}[]
  capital?: string
  callingCodes?: string[]
  topLevelDomain?: string
  regionalBlocs?: string
  region?: string
  subregion?: string
}

const defaultCountry: CountryProp = {
  flag: 'https://restcountries.eu/data/usa.svg',
  name: 'United States of America',
  alpha2Code: 'US',
  alpha3Code: 'USA',
  altSpellings: ['US', 'USA', 'United States of America'],
}

export class DropDownModel {
  @observable
  selected = defaultCountry

  @observable
  open = false

  @observable
  searchText = ''

  @observable
  fetching = false

  // @observable
  // error = false

  @observable
  mode: 'SERVER' | 'CLIENT' = 'CLIENT'

  @observable
  list: CountryProp[]

  @observable
  filteredList: CountryProp[]

  @action
  fetchAllCountriesX = async (sText: string) => {
    this.fetching = true
    const { data } = await axios.get<CountryProp[]>(
      sText === ''
        ? 'https://restcountries.eu/rest/v2/all?fields=;name;flag;altSpellings;alpha2Code;alpha3Code;'
        : `https://restcountries.eu/rest/v2/name/${sText}?fields=;name;flag;altSpellings;alpha2Code;alpha3Code;`
    )
    this.filteredList = data
    this.fetching = false
  }

  @action
  fetchAllCountries = async () => {
    this.fetching = true
    const { data } = await axios.get<CountryProp[]>(
      'https://restcountries.eu/rest/v2/all?fields=;flag;name;altSpellings;alpha3Code;demonym;capital;region;'
    )
    this.list = data
    this.fetching = false
  }

  @action
  clientFilter = (sText: string) => {
    // if (!sText) {
    // this.filteredList = this.list
    // } else {
    // const result = this.searchEngine.search(sText)
    // if (result.length > 0) this.filteredList = result
    // this.filteredList = this.searchEngine.search(sText)
    // }
    this.filteredList = sText ? this.searchEngine.search(sText) : this.list
  }

  searchEngine: Search

  prefetch = () => {
    this.searchEngine = new Search('alpha3Code')
    this.searchEngine.indexStrategy = new AllSubstringsIndexStrategy()
    this.searchEngine.addIndex('name')
    this.searchEngine.addIndex('altSpellings')
    // this.searchEngine.addIndex('alpha2Code')
    // this.searchEngine.addIndex('alpha3Code')
    this.searchEngine.addIndex('demonym')
    // this.searchEngine.addIndex('translations')
    // this.searchEngine.addIndex('currencies')
    this.searchEngine.addIndex('capital')
    // this.searchEngine.addIndex('callingCodes')
    // this.searchEngine.addIndex('topLevelDomain')
    // this.searchEngine.addIndex('regionalBlocs')
    this.searchEngine.addIndex('region')
    // this.searchEngine.addIndex('subregion')
    this.fetchAllCountries().then(() => {
      this.searchEngine.addDocuments(toJS(this.list))
      this.clientFilter()
    })
  }

  constructor() {
    // Only prefetch all data for client side filtering
    if (this.mode === 'CLIENT') this.prefetch()
    // update filtered list each time I update
    reaction(
      () => this.searchText,
      sText => {
        if (this.mode === 'CLIENT') {
          this.clientFilter(sText)
        } else {
          this.fetchAllCountriesX(sText)
        }
      }
    )
  }
}
