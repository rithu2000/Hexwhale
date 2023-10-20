import React from 'react'
import './Hero.css'
import HeroSectionLeft from '../../assets/image-6.jpg'
import HeroSectionMiddle from '../../assets/image-7.jpg'
import HeroSectionRight from '../../assets/image-8.jpg'


const Hero = () => {
    return (
        <div className="container heroContainer">
            <div className="container row heroRow">
                <div className="heroSection col-md-4 ">
                    <div className="heroImageDiv">
                        <img src={HeroSectionLeft} alt="" />
                    </div>
                    <div className="heroHeadingDiv">
                        <div className="heroHeadingInnerDiv">
                            <h2 className='heroHeading'>Sunflower clock Quartz Hands</h2>
                            <a href="#discoverLink" className='discoverButton'>Discover Now</a>
                        </div>
                    </div>
                </div>
                <div className="heroSection col-md-4 ">
                    <div className="heroImageDiv">
                        <img src={HeroSectionMiddle} alt="" />
                    </div>
                    <div className="heroHeadingDiv">
                        <div className="heroHeadingInnerDiv">

                            <h2 className='heroHeading'>Chair kimi No Isu project</h2>
                            <a href="#discoverLink" className='discoverButton'>Discover Now</a>
                        </div>
                    </div>
                </div>
                <div className="heroSection col-md-4">
                    <div className="heroImageDiv">
                        <img src={HeroSectionRight} alt="" />
                    </div>
                    <div className="heroHeadingDiv">
                        <div className="heroHeadingInnerDiv">

                            <h2 className='heroHeading'>Sweeper and Dustpan by jan kochanski</h2>
                            <a href="#discoverLink" className='discoverButton'>Discover Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;