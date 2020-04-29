import React, { useLayoutEffect, FunctionComponent, useRef } from 'react'
import { css } from 'linaria'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { reaction } from 'mobx'
import { gsap } from 'gsap'
import { useObserver } from 'mobx-react-lite'

interface DropDownSearchInputProp {}

const container = css`
  display: flex;
  height: 70px;
  margin: 20px 20px 10px 20px;
  background: #fff;
  border: 2px solid #f3f3f3;
  border-radius: 7px;
  outline: none;
`
const searchInput = css`
  ::placeholder {
    color: #9e9e9e;
  }
  border: 0px;
  outline: none;
  flex-grow: 1;
  margin: 0px 24px;
  text-transform: capitalize;
`
export const DropDownSearch: FunctionComponent<DropDownSearchInputProp> = props => {
  const store = useDropDownStore()
  const refInput = useRef<HTMLInputElement | undefined>()
  useLayoutEffect(() =>
    reaction(
      () => store.open,
      () => refInput.current?.focus()
    )
  )

  return useObserver(() => (
    <div className={container}>
      <input
        ref={refInput}
        placeholder="Search for your country..."
        className={`downdown-input ${searchInput}`}
        value={store.searchText}
        onKeyDown={e => {
          const keycode = e.keyCode
          if (keycode === 46 || keycode === 8) {
            store.searchText = store.searchText.slice(0, -1)
            return
          }
          const valid =
            (keycode > 47 && keycode < 58) || // number keys
            keycode === 32 ||
            keycode === 13 || // spacebar & return key(s) (if you want to allow carriage returns)
            (keycode > 64 && keycode < 91) || // letter keys
            (keycode > 95 && keycode < 112) || // numpad keys
            (keycode > 185 && keycode < 193) || // ;=,-./` (in order)
            (keycode > 218 && keycode < 223) // [\]' (in order)
          if (valid) store.searchText += e.key
        }}
        onBeforeInput={e => {
          e.preventDefault()
          const scroll = document.getElementsByClassName('dropdown_scroll')[0]
            ?.firstElementChild
          gsap.fromTo(
            scroll,
            { scrollTop: scroll?.scrollTop },
            { scrollTop: 0, delay: 0.4 }
          )
        }}
        // onInput={e => {
        //   store.searchText = e.currentTarget.value
        // }}
      />
    </div>
  ))
}
