import { observable, action, reaction, toJS, autorun } from 'mobx'
import axios from 'axios'
import { Search, AllSubstringsIndexStrategy } from 'js-search'
import axiosRetry from 'axios-retry'
import gsap from 'gsap'

axiosRetry(axios, { retries: Infinity })

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
  mode: 'CLIENT' | 'SERVER' | 'DIRECT' = 'DIRECT'

  @observable
  list: CountryProp[]

  @observable
  filteredList: CountryProp[]

  @action
  queryDirect = async (searchText: string) => {
    this.fetching = true
    try {
      const { data, status } = await axios.get<CountryProp[]>(
        searchText === ''
          ? 'https://restcountries.eu/rest/v2/all?fields=;name;flag;alpha3Code;'
          : `https://restcountries.eu/rest/v2/name/${searchText}?fields=;name;flag;alpha3Code;`,
        { validateStatus: false }
      )
      // console.log(data, status)
      this.filteredList = status === 200 ? data : []
    } catch (e) {
      console.error(e)
    } finally {
      this.fetching = false
    }
  }

  @action
  queryServer = async (searchText: string) => {
    this.fetching = true
    try {
      const { data, status } = await axios.get<CountryProp[]>(
        searchText === ''
          ? 'https://restcountries.eu/rest/v2/all?fields=;name;flag;alpha3Code;'
          : `https://restcountries.eu/rest/v2/name/${searchText}?fields=;name;flag;alpha3Code;`,
        { validateStatus: false }
      )
      // console.log(data, status)
      this.filteredList = status === 200 ? data : []
    } catch (e) {
      console.error(e)
    } finally {
      this.fetching = false
    }
  }

  @action
  queryDirectOnce = async () => {
    this.fetching = true
    const { data } = await axios.get<CountryProp[]>(
      'https://restcountries.eu/rest/v2/all?fields=;flag;name;altSpellings;alpha3Code;demonym;capital;region;'
    )
    this.list = data
    this.fetching = false
  }

  @action
  clientFilter = (sText: string) => {
    this.filteredList = sText ? this.searchEngine.search(sText) : this.list
  }

  searchEngine: Search

  @action
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
    this.queryDirectOnce().then(() => {
      this.searchEngine.addDocuments(toJS(this.list))
      this.clientFilter()
    })
  }

  constructor() {
    // Only prefetch all data for client side once perload for filtering
    if (this.mode === 'CLIENT') this.prefetch()

    // observe and update filtered list each time I update
    autorun(() => {
      if (this.mode === 'CLIENT') {
        this.clientFilter(this.searchText)
      } else {
        this.queryDirect(this.searchText)
      }
    })
  }
}
