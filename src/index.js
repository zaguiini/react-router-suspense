import React from 'react'
import ReactDOM from 'react-dom'

import { Context } from './store'
import { BrowserRouter } from 'react-router-dom'

const Guest = React.lazy(() => import('./Guest/Guest'))
const User = React.lazy(() => import('./User/User'))

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)

  return (
    <BrowserRouter>
      <Context.Provider value={{ loggedIn, setLoggedIn }}>
        <React.Suspense fallback={null}>
          {loggedIn ? <User /> : <Guest />}
        </React.Suspense>
      </Context.Provider>
    </BrowserRouter>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
