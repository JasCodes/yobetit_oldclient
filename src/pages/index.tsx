import React from 'react'

import Layout from '@/layout/layout'

import { DropDown } from '@/components/drop_down/drop_down'
import {
  useDropDownStore,
  DropDownStoreProvider,
} from '@/components/drop_down/store/drop_down_store'
import { css } from 'linaria'

const container = css`
  background: #fde5fe;
  display: flex;
  height: 100vh;
  width: 100vw;
`

const obj = css`
  margin: auto auto;
`

const DropDownContainer = () => {
  const store = useDropDownStore()
  return (
    <div
      className={container}
      onClick={() => {
        store.open = false
      }}
    >
      <div className={obj}>
        <DropDown />
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <Layout>
      <DropDownStoreProvider>
        <DropDownContainer />
      </DropDownStoreProvider>
    </Layout>
  )
}

export default Index
