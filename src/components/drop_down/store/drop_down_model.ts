import { observable, action, reaction, toJS } from 'mobx'
import axios from 'axios'
import { Search } from 'js-search'
// import axiosRetry from 'axios-retry'

// axiosRetry(axios, { retries: Infinity })

export interface CountryProps {
  name: string
  flag: string
  altSpellings?: string[]
  alpha2Code?: string
  alpha3Code?: string
}

const defaultCountry: CountryProps = {
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
  list: CountryProps[]

  @observable
  filteredList: CountryProps[]

  @action
  fetchAllCountriesX = async (sText: string) => {
    this.fetching = true
    const { data } = await axios.get<CountryProps[]>(
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
    const { data } = await axios.get<CountryProps[]>(
      'https://restcountries.eu/rest/v2/all?fields=;name;flag;altSpellings;alpha2Code;alpha3Code;'
    )
    this.list = data
    this.fetching = false
  }

  @action
  clientFilter = (sText: string) => {
    if (!sText) {
      this.filteredList = this.list
    } else {
      const result = this.searchEngine.search(sText)
      if (result.length > 0) this.filteredList = result
    }
  }

  searchEngine: Search

  prefetch = () => {
    this.searchEngine = new Search('alpha2Code')
    this.searchEngine.addIndex('name')
    this.searchEngine.addIndex('altSpellings')

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
