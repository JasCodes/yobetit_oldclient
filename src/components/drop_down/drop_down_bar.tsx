import React, { SFC } from 'react'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { DropDownArrow } from '@/components/drop_down/drop_down_arrow'
import { css } from 'linaria'

interface DropDownBarProp {}

const countryBox = css`
  width: 400px;
  height: 70px;
  background: #fff;
  border: 2px solid #975099;
  border-radius: 15px;
  display: flex;
  align-items: center;
`
const DropDownBar: SFC<DropDownBarProp> = props => {
  const store = useDropDownStore()
  return (
    <div className={countryBox}>
      <div>{store.selected.name}</div>
      <div style={{ flexGrow: 1 }}>{store.selected.name}</div>
      <div>
        <DropDownArrow />
      </div>
    </div>
  )
}

export { DropDownBar }
