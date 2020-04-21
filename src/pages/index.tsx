import React from 'react'
import Layout from '../layout/layout'
import { DropDown } from '../components/drop_down/drop_down'

const Index = () => (
  <Layout>
    <div className="box" style={{ backgroundColor: '#FDE5FE' }}>
      <div className="boxItemCenter">
        <DropDown />
      </div>
    </div>
  </Layout>
)

export default Index
