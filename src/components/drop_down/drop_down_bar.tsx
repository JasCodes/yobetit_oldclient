import React, { SFC } from 'react'
import { useDropDownStore } from '@/components/drop_down/store/drop_down_store'
import { DropDownBarTrail } from '@/components/drop_down/drop_down_bar_trail'
import { css } from 'linaria'
import { DropDownFlag } from '@/components/drop_down/drop_down_flag'
import { useObserver } from 'mobx-react-lite'
import { DropDownBarTitle } from '@/components/drop_down/drop_down_bar_title'

interface DropDownBarProp {}

const container = css`
  width: 500px;
  height: 70px;
  z-index: 100;
  background: #fff;
  border: 2px solid #975099;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 15px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const name = css`
  flex-grow: 1;
`
const DropDownBar: SFC<DropDownBarProp> = props => {
  const store = useDropDownStore()
  return useObserver(() => (
    <>
      <DropDownBarTitle />
      <div
        className={container}
        onClick={e => {
          e.stopPropagation()
          store.open = !store.open
        }}
      >
        <DropDownFlag srcFlag={store.selected.flag} />
        <div className={name}>{store.selected.name}</div>
        <DropDownBarTrail open={store.open} />
      </div>
    </>
  ))
}

export { DropDownBar }
