import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div>
      <form action='localhost:8692/login' method='POST' target=''>
        <label>
          <p>Email:</p>
          <input name='email' type='email' placeholder='Please enter your email' />
        </label>
        <label>
          <p>Password:</p>
          <input name='password' type='password' placeholder='Please enter your password' />
        </label>
        <p>
          <button type='submit'>Login</button>
        </p>
        <a href='_blank'>
          <small>Forgotten password?</small>
        </a>
      </form>
    </div>
  )
}

export default Login
