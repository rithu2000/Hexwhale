import React from 'react'
import './SaleOff.css'
import Bulb from '../../assets/image-20.jpg'
import FlowerPot from '../../assets/image-21.jpg'
import Knife from '../../assets/image-22.jpg'
import Towel from '../../assets/image-23.jpg'
import WoodenBowl from '../../assets/image-24.jpg'
import Walkers from '../../assets/image-12.jpg'
import Bortolini from '../../assets/image-13.jpg'
import BeerStation from '../../assets/image-14.jpg'
import VintageCloting from '../../assets/image-15.jpg'
import TheMountains from '../../assets/image-16.jpg'

const SaleOff = () => {
    return (
        <div className='container saleMainBox mt-5'>
            <div className="row text-center">
        <div className='row mainHeading'>
          <div class="col-md-5 horizontalLine d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-1 border-bottom"></div>
          <div className="col-md-2 heading">
            <h1 className='heading'>Sale Off</h1>
          </div>
          <div class="col-md-5 horizontalLine d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-1 border-bottom"></div>
        </div>
        <h4 className='subHeading mt-2'>mirum est notare quam littera gothica quam nook panthamas paum charm!</h4>
      </div>
            <div className="row centerBox mt-5">
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                    <img src={Bulb} alt="" />
                    <h2 className='productHeading mt-2'>wooden container bowl</h2>
                    <p className='discountPrice'>$96.00<span className='originalPrice mx-4'>$96.00</span></p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                    <img src={FlowerPot} alt="" />
                    <h2 className='productHeading mt-2'>wooden container bowl</h2>
                    <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                    <img src={Knife} alt="" />
                    <h2 className='productHeading mt-2'>wooden container bowl</h2>
                    <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                    <img src={Towel} alt="" />
                    <h2 className='productHeading mt-2'>wooden container bowl</h2>
                    <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6 col-12">
                    <img src={WoodenBowl} alt=""/>
                    <h2 className='productHeading mt-2'>wooden container bowl</h2>
                    <p className='discountPrice'>$96.00<span className='originalPrice m-4'>$96.00</span></p>
                </div>
            </div>
            <div className="row mt-5">
                <div className='container saleMainBox d-flex flex-row'>
                    <div className="image">
                        <img src={Walkers} alt="" />
                    </div>
                    <div className="image">
                        <img src={Bortolini} alt="" />
                    </div>
                    <div className="image">
                        <img src={BeerStation} alt="" />
                    </div>
                    <div className="image">
                        <img src={VintageCloting} alt="" />
                    </div>
                    <div className="image">
                        <img src={TheMountains} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleOff;