import React, { useState } from "react"
import "./drop_down.css"
import Arrow from "./arrow"


const DropDown = () => {

    const [open, setOpen] = useState(false)

    return <>
        <div className="contBox" onClick={() => setOpen(v => !v)} >
            <div>
                F
            </div>
            <div style={{ flexGrow: 1 }}>
                Estonia
            </div>
            <div>
                <Arrow open={open} />
            </div>
        </div>
    </>
}



export default DropDown;
