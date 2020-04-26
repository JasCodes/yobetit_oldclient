import React, { FunctionComponent } from 'react'
import { css } from 'linaria'

interface DropDownBarTitleProp {}

const txt = css`
  position: relative;
  display: inline-block;
  padding: 0px 5px 0px 10px;
  font-size: 19px;
  color: #965799;
  background-image: linear-gradient(
    to bottom,
    transparent,
    transparent 52%,
    white 52%,
    white
  );
  background-size: cover;
  background-repeat: no-repeat;
  z-index: 200;
  transform: translate(40px, 12px);
`
export const DropDownBarTitle: FunctionComponent<DropDownBarTitleProp> = props => {
  return (
    <div>
      <div className={txt}>Country</div>
    </div>
  )
}
