import React from 'react'
import Carrousel from '../components/carrousel';
import InfoLocation from '../components/infoLocation';
import Dropdown from '../components/dropdown';
import getData from '../tools/getData'
import Error from './error';

export default class Location extends React.Component {
  
  render() {
    let data = getData()
    if (!data) {
      return (
        <Error/>
      )
    }

    return (
      <>
        <Carrousel location={data}/>
        <InfoLocation location={data}/>
        <div className="dropdown-location">
            <Dropdown title="Description" text={data.description} />
            <Dropdown title="Équipements" list={data.equipments} />
        </div>
      </>
    )
  }
} 