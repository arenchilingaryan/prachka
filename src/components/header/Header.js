import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../../img/logo.jpg'
import './Header.scss'

export default function Header() {
  const location = useLocation()
  return (
    <header className="header">
      <img className="logo" src={Logo} alt='sorry bro :(' />
      <nav>
        <NavLink className="header__nav" to="/">Home</NavLink>
        <NavLink className="header__nav" to="contacts">Contacts</NavLink>
        <NavLink className="header__nav" to="prices">Prices</NavLink>
        <NavLink className="header__nav" to="gallery">Gallery</NavLink>
      </nav>
    </header>
  )
}
