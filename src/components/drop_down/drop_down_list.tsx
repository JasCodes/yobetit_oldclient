import React, { SFC, FunctionComponent, useEffect } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { css } from 'linaria'
import reactStringReplace from 'react-string-replace'
import { gsap } from 'gsap'
import { useObserver } from 'mobx-react-lite'

interface DropDownListProp {
  // data: CountryProps[]
}

const bold = css`
  font-weight: 700;
`

export const DropDownList: FunctionComponent<DropDownListProp> = props => {
  const store = useDropDownStore()
  return useObserver(() => (
    <Scrollbars style={{ height: 400 }}>
      <div>
        {store.filteredList?.map(country => {
          const boldedTitle = reactStringReplace(
            country.name,
            store.searchText,
            (match, i) => (
              <span key={i} className={bold}>
                {match}
              </span>
            )
          )
          return (
            <div
              key={country.name}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyItems: 'center',
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  position: 'relative',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img
                  style={{ height: '100%', marginLeft: '-25%' }}
                  src={country.flag}
                  alt=""
                />
              </div>
              <div
                className="normal"
                style={{
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                {
                  // <div>{country.name}</div>
                  boldedTitle
                }
              </div>
            </div>
          )
        })}
      </div>
    </Scrollbars>
  ))
}
