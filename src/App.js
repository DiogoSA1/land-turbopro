import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatPRO, Plans } from './containers'
import { CTA, Navbar, WhatsAppButton } from './components'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
        <WhatsAppButton phoneNumber="5599999999999" message="Olá! Gostaria de saber mais informações." />
      </div>
      {/* <Brand /> */}
      <WhatPRO />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Plans />
      <Footer />
    </div>
  )
}

export default App