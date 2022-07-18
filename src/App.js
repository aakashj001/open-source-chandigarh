import React from 'react'
import Community from './components/Community'
import Core from './components/Core'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='box-border'>
      <Navbar />
      <Main />
      <Community />
      <Core />
    </div>
  )
}

export default App