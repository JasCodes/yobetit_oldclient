import React, { FunctionComponent, useEffect, useRef } from 'react'
import { DropDownSearch } from '@/components/drop_down/drop_down_search'
import { DropDownList } from '@/components/drop_down/drop_down_list'
import { css } from 'linaria'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import gsap from 'gsap'
import { useObserver, Observer } from 'mobx-react-lite'
import ShadowScrollbars from '@/components/shadow_scrollbar'
import { reaction } from 'mobx'

interface DropDownPanelProp {}

const panel = css`
  height: 0px;
  overflow: hidden;
  background: white;
  transform: translateY(-10px);
  position: relative;
  margin: 0px 3px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`
const botBlur = css`
  position: absolute;
  pointer-events: none;
  bottom: 0px;
  display: block;
  width: 100%;
  height: 25px;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 1) 76%
  );
`
export const DropDownPanel: FunctionComponent<DropDownPanelProp> = props => {
  const store = useDropDownStore()
  const refPanel = useRef<HTMLDivElement>()
  useEffect(() =>
    reaction(
      () => store.open,
      () => {
        gsap.to(refPanel.current, {
          height: store.open ? 480 : 0,
          duration: 1,
          ease: 'expo',
        })
      }
    )
  )

  return (
    <div className={panel} ref={refPanel}>
      <ShadowScrollbars
        className="dropdown_scroll"
        autoHeightMax={480}
        autoHeight
      >
        <DropDownSearch />
        <DropDownList />
        <div style={{ height: 25 }} />
      </ShadowScrollbars>
      <div className={botBlur} />
    </div>
  )
}
// <div>{store.open.toString()}</div>
