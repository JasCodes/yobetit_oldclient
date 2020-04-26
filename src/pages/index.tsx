import React from 'react'
import { useObserver, Observer, observer } from 'mobx-react-lite'
import {
  useDropDownStore,
  DropDownStoreProvider,
} from '@/components/drop_down/store/drop_down_store'
import { DropDown } from '@/components/drop_down/drop_down'
import Layout from '../layout/layout'
import { Flip } from '../components/flip/flip'

// const HydratedDropDown = () => {
//   const s = useDropDownStore()
//   return useObserver(() => <DropDown x={s.filteredList} />)
// }

const Index = () => {
  // const qCountries = useGetCountries()
  // const s = useDropDownStore()
  return (
    <Layout>
      <div className="box" style={{ backgroundColor: '#FDE5FE' }}>
        <div className="boxItemCenter">
          <DropDownStoreProvider>
            <DropDown />
          </DropDownStoreProvider>
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
  )
}

export default Index
