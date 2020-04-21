import React, { useState, useEffect, SFC } from 'react'
import './drop_down.css'
import { gsap } from 'gsap'

interface ArrowProp {
  open: boolean
}

const Arrow: SFC<ArrowProp> = props => {
  let arrow
  let background
  useEffect(() => {
    background = props.open ? '#000' : '#ccc'
    gsap.to(arrow, 5, { background })
  }, [props.open])
  return (
    <>
      <div
        ref={e => {
          arrow = e
        }}
        style={{ width: 50, height: 50, background }}
      />
    </>
  )
}

export { Arrow }
