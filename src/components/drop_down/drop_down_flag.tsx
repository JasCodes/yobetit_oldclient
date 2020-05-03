import React, { FunctionComponent } from 'react'
import { css } from 'linaria'
import gsap from 'gsap'

interface DropDownFlagProp {
  srcFlag: string
  className?: string
}

const container = css`
  width: 40px;
  height: 40px;
  position: relative;
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
  opacity: 0;
`

const image = css`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
export const DropDownFlag: FunctionComponent<DropDownFlagProp> = props => {
  return (
    <div className={`${container} ${props.className}`}>
      <img
        className={image}
        src={props.srcFlag}
        alt=""
        onLoad={e => {
          gsap.to(e.currentTarget.parentElement, {
            duration: 2,
            opacity: 1,
            ease: 'expo',
          })
        }}
      />
    </div>
  )
}
