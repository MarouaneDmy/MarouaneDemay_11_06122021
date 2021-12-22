import React from 'react'
import { NavLink } from 'react-router-dom'

export default class locationCard extends React.Component {
  render() {
      const element = this.props.element;
    return (
      <div>
        <NavLink className="locationCardLink" to={`/location/${element.id}`}>
          <div className="locationCard" style={{
              backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${element.cover})`,
              backgroundSize: 'cover'
            }}
          >
            <p className="titleLocation">{element.title}</p>
          </div>
        </NavLink>
      </div>
        
    )
  }
}