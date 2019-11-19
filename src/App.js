import React, { Component, lazy } from 'react'
import { Route } from 'react-router-dom'
// import Post from './components/Post/Post'
import Login from './containers/Login/LoginContainer'
import Post from './containers/Post/PostContainer'
import './App.css'

function App () {
  return (
    <div className='App'>
      <Route exact path='/' component={Login} />
      <Route path='/post' component={Post} />
    </div>
  )
}

export default App
