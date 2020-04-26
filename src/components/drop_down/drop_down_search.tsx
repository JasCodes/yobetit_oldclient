import React, { FunctionComponent } from 'react'
import { css } from 'linaria'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'

interface DropDownSearchInputProp {}

const searchInput = css`
  /* border: 1px solid #975099; */
  /* border-radius: 5px; */

  width: 400px;
  height: 70px;
  background: #fff;
  border: 2px solid #975099;
  border-radius: 15px;
  display: flex;
  align-items: center;
  outline: none;
`
export const DropDownSearch: FunctionComponent<DropDownSearchInputProp> = props => {
  const store = useDropDownStore()
  return (
    <div>
      <input
        className={searchInput}
        onInput={e => {
          store.searchText = e.currentTarget.value
        }}
      />
    </div>
  )
}
