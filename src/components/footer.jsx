import React from 'react'
import { ReactComponent as LogoWhite } from "../images/logo-white.svg"

export default class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
            <LogoWhite alt="logo Kasa blanc"/>       
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
  }
}