import React from 'react'
import { useStore } from '../store'

const Login = () => {
  const { setLoggedIn } = useStore()

  const login = () => setLoggedIn(true)

  return (
    <div>
      Login page, pretend there's a form here
      <br />
      <button onClick={login}>Login</button>
    </div>
  )
}

export default Login
