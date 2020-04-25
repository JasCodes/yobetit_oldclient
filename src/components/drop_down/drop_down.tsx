import React, { useState, SFC } from 'react'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { DropDownBar } from '@/components/drop_down/drop_down_bar'
import { DropDownList } from '@/components/drop_down/drop_down_list'
import { DropDownSearchInput } from '@/components/drop_down/drop_down_search_input'

interface DropDownProp {}

const DropDown: SFC<DropDownProp> = props => {
  const store = useDropDownStore()
  return (
    <>
      <DropDownBar />
      <DropDownSearchInput />
      <DropDownList />
    </>
  )
}

export { DropDown }
