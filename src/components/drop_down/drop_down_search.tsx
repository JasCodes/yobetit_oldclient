import React, { FunctionComponent } from 'react'
import { css } from 'linaria'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'

interface DropDownSearchInputProp {}

const container = css`
  display: flex;
  height: 70px;
  margin: 20px 20px 10px 20px;
  background: #fff;
  border: 2px solid #f3f3f3;
  border-radius: 7px;
  outline: none;
`
const searchInput = css`
  ::placeholder {
    color: #9e9e9e;
  }
  border: 0px;
  outline: none;
  flex-grow: 1;
  margin: 0px 24px;
`
export const DropDownSearch: FunctionComponent<DropDownSearchInputProp> = props => {
  const store = useDropDownStore()
  return (
    <div className={container}>
      <input
        placeholder="Search for your country..."
        className={searchInput}
        onInput={e => {
          store.searchText = e.currentTarget.value
        }}
      />
    </div>
  )
}
