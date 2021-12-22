import React from 'react'
import Host from './host'
import Rating from './rating';
import Tags from './tags'

export default class InfoLocation extends React.Component {

  render() {

    return (
        <div className='infoLocation'>
            <h1>{this.props.location.title}</h1>
            <p className='location'>{this.props.location.location}</p>
            <Tags location={this.props.location}/>
            <Host location={this.props.location}/>
            <Rating location={this.props.location}/>
        </div>
    )
  }
}