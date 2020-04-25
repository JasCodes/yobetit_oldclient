import React, { SFC, FunctionComponent } from 'react'
import { Scrollbars } from 'react-custom-scrollbars'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'

interface DropDownListProp {
  data: CountryProps[]
}

export const DropDownList: FunctionComponent<DropDownListProp> = props => {
  const store = useDropDownStore()
  return (
    <Scrollbars style={{ height: 400 }}>
      <div>
        {store.filteredList.map(country => {
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
                style={{
                  flexGrow: 1,
                  textAlign: 'center',
                }}
              >
                {country.name}
              </div>
            </div>
          )
        })}
      </div>
    </Scrollbars>
  )
}
