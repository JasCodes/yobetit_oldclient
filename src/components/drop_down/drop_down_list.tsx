import React, {
  SFC,
  FunctionComponent,
  useEffect,
  useRef,
  useLayoutEffect,
} from 'react'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { css } from 'linaria'
import { gsap } from 'gsap'
import reactStringReplace from 'react-string-replace'
import { useObserver } from 'mobx-react-lite'
import { DropDownListItem } from '@/components/drop_down/drop_down_list_item'
import { reaction, autorun } from 'mobx'

interface DropDownListProp {
  // data: CountryProps[]
}

// const bold = css`
//   font-weight: 900;
// `

export const DropDownList: FunctionComponent<DropDownListProp> = props => {
  const store = useDropDownStore()
  const refDropDownList = useRef<HTMLDivElement>()
  useLayoutEffect(() => {
    autorun(() => {
      store.searchText
      gsap.to(refDropDownList.current, {
        keyframes: [
          { duration: 0.2, opacity: 0.5 },
          { duration: 0.2, opacity: 1, delay: 0.2, ease: 'expo' },
        ],
      })
      // gsap.to(refDropDownList.current, 0.2, { opacity: 0.5 })
      // gsap.to(refDropDownList.current, 0.2, {
      //   opacity: 1,
      //   delay: 0.2,
      //   ease: 'expo',
      // })
    })
  }, [])

  useLayoutEffect(() => {
    autorun(() => {
      store.filteredList
      if (!store.open) {
        const els = Array.from(refDropDownList.current?.children)?.slice(0, 8)
        gsap.to(els, {
          opacity: 0,
          duration: 0,
        })
      }
    })
    autorun(() => {
      const els = Array.from(refDropDownList.current?.children)?.slice(0, 8)
      if (store.open) {
        gsap.to(Array.from(refDropDownList.current?.children)?.slice(0, 8), {
          stagger: 0.15,
          duration: 0.2,
          opacity: 1,
          delay: 0.1,
        })
      }
    })
  }, [])
  return useObserver(() => (
    <div ref={refDropDownList}>
      {store.filteredList?.map(country => {
        return <DropDownListItem key={country.alpha3Code} country={country} />
      })}
    </div>
  ))
}
