import React from 'react'
import Banner from '../components/banner'
import LocationList from '../components/locationList'
import BannerHome from '../images/banner-home.png'

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Banner title="Chez vous, partout et ailleurs" image={BannerHome}/>
        <LocationList/>
      </>    
    )
  }
}