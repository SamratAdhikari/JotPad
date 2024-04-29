import React from 'react'
import Form from '../components/Form'

function Login() {
  return (
    <Form method={'login'} route={'api/token/'}/>
  )
}

export default Login
