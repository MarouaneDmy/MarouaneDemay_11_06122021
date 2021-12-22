import React from 'react'
import Carrousel from '../components/carrousel';
import InfoLocation from '../components/infoLocation';
import Dropdown from '../components/dropdown';
import Footer from '../components/footer'
import getData from '../tools/getData'

export default class Location extends React.Component {
  
  render() {
    let data = getData()
    return (
      <>
        <Carrousel location={data}/>
        <InfoLocation location={data}/>
        <div className="dropdown-location">
            <Dropdown title="Description" text={data.description} />
            <Dropdown title="Équipements" list={data.equipments} />
        </div>
        <Footer/>
      </>
    )
  }
} 