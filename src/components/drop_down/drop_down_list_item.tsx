import React, { FunctionComponent } from 'react'
import reactStringReplace from 'react-string-replace'
import { css } from 'linaria'
import { CountryProps } from '@/components/drop_down/store/drop_down_model'

interface DropDownListItemProp {
  country: CountryProps
  searchText: string
}

const bold = css`
  font-weight: 900;
`
export const DropDownListItem: FunctionComponent<DropDownListItemProp> = props => {
  const boldedTitle = reactStringReplace(
    props.country.name,
    props.searchText,
    (match, i) => (
      <span key={i} className={bold}>
        {match}
      </span>
    )
  )
  return (
    <div
      key={props.country.alpha3Code}
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
          src={props.country.flag}
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
}
