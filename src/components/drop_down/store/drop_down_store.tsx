import React, { createContext, FunctionComponent } from 'react'
import { DropDownModel } from './drop_down_model'

const dropDownStoreContext = createContext<DropDownModel | null>(null)

export const DropDownStoreProvider: FunctionComponent = props => {
  const store = new DropDownModel()
  return (
    <dropDownStoreContext.Provider value={store}>
      {props.children}
    </dropDownStoreContext.Provider>
  )
}

export const useDropDownStore = () => {
  const store = React.useContext(dropDownStoreContext)
  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
