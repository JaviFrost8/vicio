import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

  return (
    <nav>
      <ul>
        <li><Link to='/'>Inicio</Link></li>
        <li><Link to='/game'>Juego</Link></li>
        <li><Link to='/help'>Ayuda</Link></li>
      </ul>
    </nav>
  )
}
