import React, { FunctionComponent } from 'react'
import reactStringReplace from 'react-string-replace'
import { css } from 'linaria'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { DropDownFlag } from '@/components/drop_down/drop_down_flag'
import Ripples, { createRipples } from 'react-ripples'
import { autorun } from 'mobx'
import { useObserver } from 'mobx-react-lite'

interface DropDownListItemProp {
  country: CountryProp
}

interface BoldTitleProp {
  country: CountryProp
  searchText: string
}

const bold = css`
  font-weight: 900;
`
const container = css`
  display: flex;
  place-items: center;
  background: #f2f1fe;
  margin: 10px;
  border-radius: 10px;
  cursor: pointer;
`
const flag = css`
  margin: 10px 20px;
`

const title = css`
  flex-grow: 1;
  margin: 20px;
`
const ripple = css`
  flex-grow: 1;
  border-radius: 10px;
`
const BoldedTitle: FunctionComponent<BoldTitleProp> = props => {
  return reactStringReplace(
    props.country.name,
    props.searchText,
    (match, i) => (
      <span key={i} className={bold}>
        {match}
      </span>
    )
  )
}

export const DropDownListItem: FunctionComponent<DropDownListItemProp> = props => {
  const store = useDropDownStore()
  return (
    <div className={container}>
      <Ripples
        color="#B91CBF11"
        className={ripple}
        onClick={() => {
          store.selected = props.country
          store.open = false
        }}
      >
        <DropDownFlag className={flag} srcFlag={props.country.flag} />
        <div className={title}>
          <BoldedTitle country={props.country} searchText={store.searchText} />
        </div>
      </Ripples>
    </div>
  )
}
