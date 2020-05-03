import React, { useLayoutEffect, useRef } from 'react'
import { css } from 'linaria'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { autorun } from 'mobx'
import { gsap } from 'gsap'
import { useObserver } from 'mobx-react-lite'

interface DropDownSearchInputProp {}

const dropDownSearch = css`
  display: flex;
  height: 70px;
  margin: 25px 20px 15px 20px;
  background: #fff;
  box-shadow: 0px 0px 0px 2px #f3f3f3;
  /* border: 2px solid #f3f3f3; */
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
export const DropDownSearch: FunctionComponent<DropDownSearchInputProp> = () => {
  const store = useDropDownStore()
  const refInput = useRef<HTMLInputElement | undefined>()
  // useLayoutEffect(
  //   () =>
  //     reaction(
  //       () => store.open,
  //       () => refInput.current?.focus()
  //     ),
  //   []
  // )

  useLayoutEffect(() => {
    autorun(() => {
      const t = `.${dropDownSearch}`
      if (store.open) {
        refInput.current?.focus()
        gsap.to(t, { opacity: 1, delay: 0.6 })
      } else {
        gsap.to(t, { opacity: 0 })
      }
    })
    autorun(() => {
      const t = `.${dropDownSearch}`
      // const borderColor = store.fetching ? '#1cbfb4' : '#f3f3f3'
      const boxShadow = store.fetching
        ? '0px 0px 4px 4px #f3f3f3'
        : '0px 0px 0px 2px #f3f3f3'
      gsap.to(t, { boxShadow, ease: 'expo' })
    })
  }, [])

  return useObserver(() => (
    <div className={dropDownSearch}>
      <input
        ref={refInput}
        placeholder="Search for your country..."
        className={`downdown-input ${searchInput}`}
        onKeyDown={e => {
          if (e.keyCode === 13) {
            if (store.filteredList.length > 0 && store.open) {
              const [first] = store.filteredList
              store.selected = first
              store.open = false
            } else {
              store.open = true
            }
          }
          // space
          else if (e.keyCode === 32) {
            if (!store.open || store.searchText === '') {
              e.preventDefault()
              store.open = true
            }
          }
        }}
        onChange={e => {
          store.searchText = e.currentTarget.value
          const scroll = document.getElementsByClassName('dropdown_scroll')[0]
            ?.firstElementChild
          gsap.fromTo(
            scroll,
            { scrollTop: scroll?.scrollTop },
            { scrollTop: 0, delay: 0, duration: 0.3 }
          )
        }}
      />
    </div>
  ))
}
