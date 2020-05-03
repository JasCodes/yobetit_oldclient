import React, { FunctionComponent, useEffect } from 'react'
import { DropDownSearch } from '@/components/drop_down/drop_down_search'
import { DropDownList } from '@/components/drop_down/drop_down_list'
import { css } from 'linaria'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'

import ShadowScrollbars from '@/components/shadow_scrollbar'
import { autorun } from 'mobx'
import gsap from 'gsap'

interface DropDownPanelProp {}

const PANEL_HEIGHT = 500
const BLUR_HEIGHT = 25

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
export const DropDownPanel: FunctionComponent<DropDownPanelProp> = () => {
  const store = useDropDownStore()
  useEffect(
    () =>
      autorun(() => {
        const isBlurDot = store.filteredList?.length >= 10
        const adjust =
          store.filteredList?.length === 0 ? BLUR_HEIGHT - 10 : BLUR_HEIGHT

        gsap.to(`.${botBlur}`, {
          opacity: isBlurDot ? 1 : 0,
          duration: 0.2,
          ease: 'expo',
        })

        const scrollBarHeight =
          document.getElementsByClassName('dropdown_scroll')[0].clientHeight ||
          PANEL_HEIGHT

        const adHeight = isBlurDot ? PANEL_HEIGHT : scrollBarHeight - adjust

        const height = store.open ? adHeight || PANEL_HEIGHT : 0

        gsap.to(`.${panel}`, {
          height,
          duration: 1,
          ease: 'expo',
        })
      }),
    []
  )

  return (
    <div className={panel}>
      <ShadowScrollbars
        className="dropdown_scroll"
        autoHeightMax={PANEL_HEIGHT}
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
