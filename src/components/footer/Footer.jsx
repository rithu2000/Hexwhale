import React from 'react'
import './Footer.css'
import logo from '../../assets/image-18.png'


const Footer = () => {
  return (
    <div className="container-fluid">
        <div className="footerContainer row d-flex flex-row mt-5">
            <div className="col-md-6">
                <img src={logo} alt="" />

            </div>
            <div className="col-md-3">
            <img src={logo} alt="" />
            </div>
            <div className="col-md-3">
            <img src={logo} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Footer;