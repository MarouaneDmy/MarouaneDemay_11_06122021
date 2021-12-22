import React from 'react'

export default class Host extends React.Component {

  render() {
    const location = this.props.location
    return (
        <div className='host'>
            <p>{location.host.name}</p>
            <img src={location.host.picture} alt=""></img>
        </div>
    )
  }
}