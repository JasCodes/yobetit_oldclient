import React, { FunctionComponent } from 'react'
import { css } from 'linaria'
import { DDConst } from './drop_down_constants'

interface DropDownBarTitleProp {}

const txt = css`
  position: relative;
  display: inline-block;
  padding: 0px 5px 0px 10px;
  font-size: 17px;
  /* color: #965799; */
  /* color: #b91cbf; */
  color: ${DDConst.primaryColor};
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
  transform: translate(22px, 11px);
`
export const DropDownBarLabel: FunctionComponent<DropDownBarTitleProp> = () => {
  return (
    <div>
      <div className={txt}>Country</div>
    </div>
  )
}
