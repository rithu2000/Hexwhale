import React from 'react'
import './Footer.css'
import logo from '../../assets/image-18.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faGlobe } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return (
        <footer className='bg-dark'>

            <div className="container-fluid footerContainer">
                <div className="footerRow row d-flex flex-row mt-5">
                    <div className="col-md-6">
                        <img src={logo} alt="" />
                        <h4 className='footerText mt-3'>Mirum est notare quam littera gothica, quam nunc putamas parum claram,
                            Anteposuerit litterarum formas.</h4>
                        <h6 className='footerText mt-3'><i class="bi bi-geo-alt-fill"></i>1234 Heaven Stress, Beverly Hill, Melbourne, USA.</h6>
                        <h6 className='footerText'>hello@hexstock.com</h6>
                        <h6 className='footerText'>(800)123456789</h6>
                    </div>
                    <div className="col-md-3">
                        <h2 className='footerHeading'>Information</h2>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>About Us</a>
                        </p>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>Careers</a>
                        </p>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>Delivery Information</a>
                        </p>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>Privacy policy</a>
                        </p>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>Terms & Condition</a>
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h2 className='footerHeading'>Customer Service</h2>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>Shipping policy</a>
                        </p>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>Help & Contact Us</a>
                        </p>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>Returns & Refunds</a>
                        </p>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>Online Stores</a>
                        </p>
                        <p className='footerText'>
                            <a href="#aboutus" className='footerText'>Terms & Condition</a>
                        </p>
                    </div>
                </div>
                <div class="col-md-12 col-12 horizontalLine-2 d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-5 border-bottom"></div>
                <div className="footerRow row d-flex flex-row text-center">
                    <div className="col-md-6">
                        <h2 className='footerText'>Copyright <span className='companyName'>hexstock</span> all rights reserved. Powered by <span className='companyName'>Hexwhale</span></h2>
                    </div>
                    <div className="d-flex flex-row  col-md-6">
                        <p className='footerText'><FontAwesomeIcon className='faIcons' icon={faGlobe} /></p>
                        <p className='footerText'><FontAwesomeIcon className='faIcons' icon={faBagShopping} /></p>
                        <p className='footerText'><FontAwesomeIcon className='faIcons' icon={faBagShopping} /></p>
                        <p className='footerText'><FontAwesomeIcon className='faIcons' icon={faBagShopping} /></p>
                        <p className='footerText'><FontAwesomeIcon className='faIcons' icon={faBagShopping} /></p>
                        <p>
                            
                            
                        </p>

                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;