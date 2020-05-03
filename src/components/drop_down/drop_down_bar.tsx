import React, { useEffect } from 'react'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { DropDownBarTrail } from '@/components/drop_down/drop_down_bar_trail'
import { css } from 'linaria'
import { DropDownFlag } from '@/components/drop_down/drop_down_flag'
import { useObserver } from 'mobx-react-lite'
import { DropDownBarLabel } from '@/components/drop_down/drop_down_bar_label'

import { gsap } from 'gsap'
import { autorun } from 'mobx'
import { DDConst } from './drop_down_constants'

interface DropDownBarProp {}

const bar = css`
  height: 70px;
  z-index: 100;
  border: 2px solid;
  background: #fff;
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`

const title = css`
  flex-grow: 1;
  margin: 0px 5px;
`
const flag = css`
  margin: 2px 20px 0px 25px;
`
const DropDownBar: SFC<DropDownBarProp> = () => {
  const store = useDropDownStore()
  useEffect(() => {
    autorun(() =>
      gsap.to(`.${bar}`, {
        borderColor: store.open
          ? DDConst.primaryColorActive
          : DDConst.primaryColor,
        boxShadow: store.open
          ? 'rgba(225, 6, 235, 0.2) 0px 0px 10px 1px, rgba(0, 0, 0, 0.2) 4px 4px 10px 1px'
          : `${DDConst.primaryColor} 0px 0px 0px 0px , rgba(0, 0, 0, 0) 4px 4px 8px 0px`,
      })
    )
  }, [])

  return useObserver(() => (
    <>
      <DropDownBarLabel />
      <div
        className={bar}
        onClick={e => {
          e.stopPropagation()
          store.open = !store.open
        }}
      >
        <DropDownFlag className={flag} srcFlag={store.selected.flag} />
        <div className={title}>{store.selected.name}</div>
        <DropDownBarTrail />
      </div>
    </>
  ))
}

export { DropDownBar }

// <div className={title}>{store.selected.name}</div>
// <Textfit className={title} mode="single">
//           {store.selected.name}
//         </Textfit>
