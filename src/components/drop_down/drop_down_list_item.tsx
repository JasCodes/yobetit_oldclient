import React, { FunctionComponent, useRef } from 'react'
import { css } from 'linaria'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import reactStringReplace from 'react-string-replace'
import { DropDownFlag } from '@/components/drop_down/drop_down_flag'
// import Ripples, { createRipples } from 'react-ripples'
import { autorun } from 'mobx'
import { useObserver } from 'mobx-react-lite'
// import { Textfit } from 'react-textfit'
import gsap from 'gsap'

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
const dropDownItem = css`
  :hover {
    /* background: #b91cbf3b; */
    background: #b91cbf17;
  }
  display: flex;
  place-items: center;
  margin: 10px;
  padding: 18px 10px;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.6s;
`
const flag = css`
  margin: 0px 25px 0px 5px;
`

const title = css`
  flex-grow: 1;
  /* margin: 20px; */
`
const ripple = css`
  flex-grow: 1;
  border-radius: 10px;
  place-items: center;
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
  const refDropDownItem = useRef<HTMLDivElement>()
  return (
    <div
      ref={refDropDownItem}
      className={dropDownItem}
      onClick={() => {
        store.selected = props.country
        store.open = false
      }}
    >
      <DropDownFlag className={flag} srcFlag={props.country?.flag} />
      <div className={title}>
        <BoldedTitle country={props.country} searchText={store.searchText} />
      </div>
    </div>
  )
}

// <Ripples
//   color="#B91CBF11"
//   className={ripple}
//   onClick={() => {
//     store.selected = props.country
//     store.open = false
//   }}
// >

// onMouseOver={() => {
//   console.log('en')
//   gsap.to(refDropDownItem.current, {
//     background: '#b91cbf3b',
//     duration: 0.4,
//   })
// }}
// onMouseOut={() => {
//   console.log('ex')

//   gsap.to(refDropDownItem.current, { background: '#b91cbf17' })
// }}
