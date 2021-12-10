import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className='navigation'>
          <li>
            <NavLink exact to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}