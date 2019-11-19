import React from 'react'

import Login from '../../components/Login/Login'
import './LoginContainer.css'
import logo from '../../logo.svg'

const LoginContainer = () => {
  return (
    <div className='container'>
      <div id='login' className=' form'>
        {/* Put image logo here */}
        <div className='container'>
          <img className='logo' src={logo} alt='logo' />
          <h1>TravelWrite</h1>
        </div>
        <Login />
      </div>
    </div>
  )
}

export default LoginContainer
