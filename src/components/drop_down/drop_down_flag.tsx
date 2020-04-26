import React, { FunctionComponent } from 'react'
import { css } from 'linaria'

interface DropDownFlagProp {
  srcFlag: string
}

const container = css`
  width: 35px;
  height: 35px;
  margin: 0px 20px;
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
`
export const DropDownFlag: FunctionComponent<DropDownFlagProp> = props => {
  return (
    <div className={container}>
      <img
        style={{ height: '100%', marginLeft: '-25%' }}
        src={props.srcFlag}
        alt=""
      />
    </div>
  )
}
