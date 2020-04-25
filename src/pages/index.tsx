import React from 'react'
import { useObserver } from 'mobx-react-lite'
import Layout from '../layout/layout'
import { Flip } from '../components/flip/flip'
// import { useGetCountries, CountryProps } from '../hooks/use_get_countries'
import { DropDown } from '../components/drop_down/drop_down'
import {
  DropDownStoreProvider,
  useDropDownStore,
} from '../components/drop_down/store/drop_down_store'

const HydratedDropDown = () => {
  const s = useDropDownStore()
  return useObserver(() => <DropDown data={s.filteredList} />)
}

const Index = () => {
  // const qCountries = useGetCountries()
  return (
    <DropDownStoreProvider>
      <Layout>
        <div className="box" style={{ backgroundColor: '#FDE5FE' }}>
          <div className="boxItemCenter">
            <HydratedDropDown />
            {
              //   qCountries.status === 'success' ? (
              //   <DropDown data={qCountries.data} />
              // ) : (
              //   <DropDown data={[defC]} />
              // )
            }
            {
              // <Flip />
            }
          </div>
        </div>
      </Layout>
    </DropDownStoreProvider>
  )
}

export default Index
