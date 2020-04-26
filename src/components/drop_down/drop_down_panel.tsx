import React, { FunctionComponent } from 'react'
import { DropDownSearch } from '@/components/drop_down/drop_down_search'
import { DropDownList } from '@/components/drop_down/drop_down_list'

interface DropDownPanelProp {}

export const DropDownPanel: FunctionComponent<DropDownPanelProp> = props => {
  return (
    <div>
      <DropDownSearch />
      <DropDownList />
    </div>
  )
}
