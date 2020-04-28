import React, { SFC, FunctionComponent, useEffect } from 'react'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { css } from 'linaria'
import reactStringReplace from 'react-string-replace'
import { gsap } from 'gsap'
import { useObserver } from 'mobx-react-lite'
import { DropDownListItem } from '@/components/drop_down/drop_down_list_item'

interface DropDownListProp {
  // data: CountryProps[]
}

// const bold = css`
//   font-weight: 900;
// `

export const DropDownList: FunctionComponent<DropDownListProp> = props => {
  const store = useDropDownStore()
  return useObserver(() => (
    <div>
      {store.filteredList?.map(country => {
        return <DropDownListItem key={country.alpha3Code} country={country} />
      })}
    </div>
  ))
}
