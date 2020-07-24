import React from 'react'
import { Route } from 'react-router-dom'
import Contacts from '../contacts/Contacts'
import Gallery from '../gallery/Gallery'
import Header from '../header/Header'
import HomePage from '../home-page/HomePage'
import Prices from '../prices/Prices'
import './App.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/prices" component={Prices} />
      <Route path="/gallery" component={Gallery} />
    </div>
  )
}

export default App
