import React from 'react'
import Community from './components/Community'
import Main from './components/Main'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className='box-border'>
      <Navbar />
      <Main />
      <Community />
    </div>
  )
}

export default App