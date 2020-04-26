import React, { useState, SFC } from 'react'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { DropDownBar } from '@/components/drop_down/drop_down_bar'
import { DropDownList } from '@/components/drop_down/drop_down_list'
import { Observer, useObserver } from 'mobx-react-lite'
import { DropDownSearch } from '@/components/drop_down/drop_down_search'
import { DropDownPanel } from '@/components/drop_down/drop_down_panel'

interface DropDownProp {}
export const DropDown: SFC<DropDownProp> = props => {
  return (
    <>
      <DropDownBar />
      <DropDownPanel />
    </>
  )
}
