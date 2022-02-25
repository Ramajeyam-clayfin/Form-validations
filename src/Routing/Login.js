import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { fakeAuth } from "./fakeAuth"

function LoginPage() {
  let navigate = useNavigate()
  let location = useLocation()

  let { from } = location.state || { from: { pathname: "/" } }
  let login = () => {
    fakeAuth.login(() => {
      navigate(from)
    })
  }
  console.log('login page')

  return (
    <div>
      login page
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

export default LoginPage
