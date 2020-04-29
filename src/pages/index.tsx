import React, { useRef, useEffect } from 'react'
import Layout from '@/layout/layout'

import { gsap } from 'gsap'
import {
  useDropDownStore,
  DropDownStoreProvider,
} from '@/components/drop_down/store/drop_down_store'
import { css } from 'linaria'
import { DropDown } from '@/components/drop_down/drop_down'
import Scrollbars from 'react-custom-scrollbars'
import { autorun, reaction } from 'mobx'
import { useWindowSize } from '@/hooks/use-window-size'

const background = css`
  background: #fde5fe;
  display: flex;
  min-height: 100vh;
  width: 100vw;
`

const dropDown = css`
  /* margin: auto auto; */
  /* padding-top: 60px; */
  margin: 0px auto;
  opacity: 0;
`
const getTop = (open: boolean, height: number) => {
  const innerHeight = height - 70
  const closeHeight = (innerHeight - 80) / 2
  const openHeight = closeHeight / 2
  return open ? openHeight : closeHeight
}

const DropDownContainer = () => {
  const store = useDropDownStore()
  const size = useWindowSize()

  const refDropDown = useRef<HTMLDivElement>()
  useEffect(() =>
    reaction(
      () => store.open,
      () => {
        gsap.to(refDropDown.current, {
          duration: 1,
          ease: 'expo',
          'margin-top': getTop(store.open, size.height),
        })
      }
    )
  )
  useEffect(() => {
    gsap.to(refDropDown.current, {
      duration: 0,
      'margin-top': getTop(store.open, size.height),
    })
  }, [refDropDown.current, size.height])

  useEffect(() => {
    gsap.fromTo(
      refDropDown.current,
      {
        opacity: 0,
        'margin-top': getTop(store.open, size.height) - 40,
      },
      {
        opacity: 1,
        'margin-top': getTop(store.open, size.height),
        delay: 0.5,
        duration: 0.6,
        ease: 'power4',
      }
    )
  }, [])

  return (
    <div
      className={background}
      onClick={e => {
        const input = document.getElementsByClassName('downdown-input')[0] as
          | undefined
          | HTMLInputElement
        input?.focus({ preventScroll: true })
      }}
    >
      <div ref={refDropDown} className={dropDown}>
        <DropDown />
      </div>
    </div>
  )
}

const Index = () => {
  return (
    <Layout>
      <DropDownStoreProvider>
        <DropDownContainer />
      </DropDownStoreProvider>
    </Layout>
  )
}

export default Index
