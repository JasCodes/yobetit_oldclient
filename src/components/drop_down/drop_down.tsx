import React, { useState, SFC } from 'react'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { DropDownBar } from '@/components/drop_down/drop_down_bar'
import { DropDownList } from '@/components/drop_down/drop_down_list'
import { DropDownSearchInput } from '@/components/drop_down/drop_down_search_input'
import { Observer, useObserver } from 'mobx-react-lite'

interface DropDownProp {}

export const DropDown: SFC<DropDownProp> = props => {
  return (
    <>
      <DropDownBar />
      <DropDownSearchInput />
      <DropDownList />
    </>
  )
}
