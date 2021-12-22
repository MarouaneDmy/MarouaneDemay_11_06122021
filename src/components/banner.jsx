import React from 'react'
import styled from 'styled-components'

export default class Banner extends React.Component {

  styleBanner(){
    const HeightBanner = styled.div`
      @media only screen and (max-width: 1100px){
        height: 223px;
      }
    `

    if (this.props.page === "about") {
      return (
        <HeightBanner className='banner' style={{
          backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${this.props.image})`
        }}>
            <h1>{this.props.title}</h1>
        </HeightBanner>
      )
    } else {
      return (
        <div className='banner' style={{
          backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${this.props.image})`
        }}>
            <h1>{this.props.title}</h1>
        </div>
      )
    }
  }
  
  render() {
    return this.styleBanner()
  }
}