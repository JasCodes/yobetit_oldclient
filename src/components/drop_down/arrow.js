import React, { useState, useEffect } from "react"
import "./drop_down.css"
import { gsap } from "gsap"

const Arrow = ({ open }) => {
    let arrow;
    let background;
    useEffect(() => {
        background = open ? '#000' : "#ccc";
        gsap.to(arrow, 5, { background })
    }, [open])
    return <>
        <div ref={e => arrow = e} style={{ width: 50, height: 50, background }}>
        </div>
    </>
}

export default Arrow;
