import React, { useState, SFC } from 'react'
import './drop_down.css'
import { Arrow } from './arrow'

interface DropDownProp {}

const DropDown: SFC<DropDownProp> = props => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div
        className="contBox"
        onClick={() => {
          setOpen(v => !v)
        }}
      >
        <div>F</div>
        <div style={{ flexGrow: 1 }}>Estonia</div>
        <div>
          <Arrow open={open} />
        </div>
      </div>
    </>
  )
}

export { DropDown }
