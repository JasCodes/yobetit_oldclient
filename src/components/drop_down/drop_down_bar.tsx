import React, { useRef, useEffect } from 'react'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { DropDownBarTrail } from '@/components/drop_down/drop_down_bar_trail'
import { css } from 'linaria'
import { DropDownFlag } from '@/components/drop_down/drop_down_flag'
import { useObserver } from 'mobx-react-lite'
import { DropDownBarLabel } from '@/components/drop_down/drop_down_bar_label'
import { Textfit } from 'react-textfit'
import { reaction } from 'mobx'
import { gsap } from 'gsap'

interface DropDownBarProp {}

const bar = css`
  height: 70px;
  z-index: 100;
  background: #fff;
  border: 2px solid #b91cbf;
  box-shadow: 0 0 1px #b91cbf, 4px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const title = css`
  flex-grow: 1;
  margin: 20px;
`
const flag = css`
  margin: 20px;
`
const DropDownBar: SFC<DropDownBarProp> = props => {
  const store = useDropDownStore()
  const refBar = useRef<HTMLDivElement>()
  useEffect(() => {
    gsap.to(refBar.current, {
      'box-shadow': store.open
        ? '0 0 1px #b91cbf, 4px 4px 8px rgba(0, 0, 0, 0.2)'
        : '0 0 0px #b91cbf, 4px 4px 8px rgba(0, 0, 0, 0)',
    })
  }, [store.open])
  // useEffect(
  //   () => reaction(() => store.open),
  //   () => {
  //     console.log(store.open)
  //     gsap.to(refBar.current, {
  //       'box-shadow': store.open
  //         ? 'box-shadow: 0 0 0px #b91cbf, 4px 4px 8px rgba(0, 0, 0, 0)'
  //         : 'box-shadow: 0 0 1px #b91cbf, 4px 4px 8px rgba(0, 0, 0, 0.2)',
  //     })
  //   }
  // )

  return useObserver(() => (
    <>
      <DropDownBarLabel />
      <div
        ref={refBar}
        className={bar}
        onClick={e => {
          e.stopPropagation()
          store.open = !store.open
        }}
      >
        <DropDownFlag className={flag} srcFlag={store.selected.flag} />
        <Textfit className={title} max={24} mode="single">
          {store.selected.name}
        </Textfit>
        <DropDownBarTrail open={store.open} />
      </div>
    </>
  ))
}

export { DropDownBar }

// <div className={title}>{store.selected.name}</div>
