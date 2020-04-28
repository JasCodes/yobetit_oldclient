import React, { FunctionComponent } from 'react'
import { css } from 'linaria'

interface DropDownFlagProp {
  srcFlag: string
  className?: string
}

const container = css`
  width: 35px;
  height: 35px;
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
`

const image = css`
  height: 100%;
  margin-left: -25%;
`
export const DropDownFlag: FunctionComponent<DropDownFlagProp> = props => {
  return (
    <div className={`${container} ${props.className}`}>
      <img className={image} src={props.srcFlag} alt="" />
    </div>
  )
}
