import React from 'react'
import { Link } from 'react-router-dom'

export default class Error extends React.Component {
  render() {
    return (
      <div className='error-content'>
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas</p>
        <Link className="lien-accueil" to="/">Retourner sur la page d'accueil</Link>
      </div>
    )
    
  }
}