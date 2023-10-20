import React from 'react'
import './Banner.css'
import Speaker from '../../assets/image-39.jpg'
import LaptopDesk from '../../assets/image-38.jpg'
import Light from '../../assets/image-40.jpg'
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
    <div className="container-fluid bannerNameBox">
      <Carousel>
      <Carousel.Item>
      <img src={Speaker} alt="" />
        <Carousel.Caption>
          <h3 className='bannerHeading'>Think different & Do it otherwise</h3>
          <p className='bannerSubHeading'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button class="subscribeButton btn border rounded-0 p-3 px-5 mx-auto mt-4">SUBSCRIBE</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Light} alt="" />
        <Carousel.Caption>
        <h3 className='bannerHeading'>Think different & Do it otherwise</h3>
          <p className='bannerSubHeading'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button class="subscribeButton btn border rounded-0 p-3 px-5 mx-auto mt-4">SUBSCRIBE</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={LaptopDesk} alt="" />
        <Carousel.Caption>
        <h3 className='bannerHeading'>Think different & Do it otherwise</h3>
          <p className='bannerSubHeading'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          <button class="subscribeButton btn border rounded-0 p-3 px-5 mx-auto mt-4">SUBSCRIBE</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Banner;