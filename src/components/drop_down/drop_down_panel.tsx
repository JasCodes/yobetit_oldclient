import React, { FunctionComponent } from 'react'
import { DropDownSearch } from '@/components/drop_down/drop_down_search'
import { DropDownList } from '@/components/drop_down/drop_down_list'
import { css } from 'linaria'

interface DropDownPanelProp {}

const container = css`
  background: white;
  transform: translateY(-10px);
  position: relative;
  margin: 0px 3px;
  box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.1),
    0 12px 100px 0 rgba(0, 0, 0, 0.1);
`
export const DropDownPanel: FunctionComponent<DropDownPanelProp> = props => {
  return (
    <div className={container}>
      <DropDownSearch />
      <DropDownList />
    </div>
  )
}
