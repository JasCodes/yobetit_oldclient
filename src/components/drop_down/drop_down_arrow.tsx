import React, { useState, useEffect, SFC } from 'react'
import { gsap } from 'gsap'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'

interface ArrowProp {
  open: boolean
}

export const DropDownArrow: SFC<ArrowProp> = props => {
  let arrow
  const store = useDropDownStore()
  useEffect(() => {
    const background = store.open ? '#000' : '#ccc'
    gsap.to(arrow, 5, { background })
  }, [store.open])

  return (
    <>
      <div
        ref={e => {
          arrow = e
        }}
        style={{ width: 50, height: 50 }}
      />
    </>
  )
}
