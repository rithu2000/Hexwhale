import React from 'react'
import './Gallery.css'
import Bulb from '../../assets/image-20.jpg'
import FlowerPot from '../../assets/image-21.jpg'
import Knife from '../../assets/image-22.jpg'
import Towel from '../../assets/image-23.jpg'
import WoodenBowl from '../../assets/image-24.jpg'
import WallLight from '../../assets/image-25.jpg'
import CeilLight from '../../assets/image-26.jpg'
import Bag from '../../assets/image-27.jpg'

const Gallery = () => {
  return (
    <div className='mainBox container'>
      <div className="row text-center">
        <div className='row mainHeading'>
          <div class="col-md-4 horizontalLine d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-1 border-bottom"></div>
          <div className="col-md-4 heading">
            <h1 className='heading'>Trending Products</h1>
          </div>
          <div class="col-md-4 horizontalLine d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-1 border-bottom"></div>
        </div>
        <h4 className='subHeading mt-2'>mirum est notare quam littera gothica quam nook panthamas paum charm!</h4>
      </div>
      <div className="row mt-5">
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <img src={Bulb} alt="" />
          <h2 className='productHeading mt-2'>wooden container bowl</h2>
          <p className='discountPrice'>$96.00<span className='originalPrice mx-4'>$96.00</span></p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <img src={FlowerPot} alt="" />
          <h2 className='productHeading mt-2'>wooden container bowl</h2>
          <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <img src={Knife} alt="" />
          <h2 className='productHeading mt-2'>wooden container bowl</h2>
          <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <img src={Towel} alt="" />
          <h2 className='productHeading mt-2'>wooden container bowl</h2>
          <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <img src={WoodenBowl} alt="" />
          <h2 className='productHeading mt-2'>wooden container bowl</h2>
          <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <img src={WallLight} alt="" />
          <h2 className='productHeading mt-2'>wooden container bowl</h2>
          <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <img src={CeilLight} alt="" />
          <h2 className='productHeading mt-2'>wooden container bowl</h2>
          <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
          <img src={Bag} alt="" />
          <h2 className='productHeading mt-2'>wooden container bowl</h2>
          <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
        </div>
      </div>
      <div className="row">
        <div className="text-center">
          <button className='loadButton btn border rounded-0 p-2 px-5 mx-auto mt-4'>LOAD MORE</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery;