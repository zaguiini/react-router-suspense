import React from 'react'

export const Context = React.createContext()

export const useStore = () => React.useContext(Context)
