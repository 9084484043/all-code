import React, { createContext, useReducer, useState } from 'react'

export const Store = createContext()

const Context = ({children}) => {
    const [store,setStore] = useState({
        isLoggedIn: localStorage.getItem('isLoggedIn'),
        token:localStorage.getItem('token')
    })
  return (
    <Store.Provider value = {{store,setStore}}>{children}</Store.Provider>
  )
}

export default Context