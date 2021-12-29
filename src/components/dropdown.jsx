import React from 'react'

export default class Dropdown extends React.Component {

  contentDropdown() {
    if (this.props.text) {
      return <p>{this.props.text}</p>
    }
    if (this.props.list) {
      return (
        <ul className="dropdownList">
          {this.props.list.map((item, index) => (
            <li key={`dropdown_${index}`}>{item}</li>
          ))}
        </ul>
      )
    }
  }

  render() {
    return (
      <details className="dropdown">
        <summary>
          {this.props.title}
          <i className="fas fa-chevron-left dropdown-arrow"></i>
        </summary>
        <div className='dropdown-content'>{this.contentDropdown()}</div>
      </details>
    )
  }
}