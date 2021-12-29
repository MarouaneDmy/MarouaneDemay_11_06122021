import React from 'react'
import data from '../data/data'
import LocationCard from '../components/locationCard'

export default class LocationList extends React.Component {
  render() {
    return (
        <div className='locationList'>{data.map((el) => <LocationCard key={el.id} element={el}/>)}</div> 
    )
  }
}