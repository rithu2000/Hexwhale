import React from 'react'
import './Discount.css'

const Discount = () => {
    return (
        <div className="container discountContainer mt-5 mb-5">
            <div className="row">
                <div className="col-12 text-center">
                    <h1 className='heading'>Get Discount Info</h1>
                    <h4 className='subHeading'>Subscribe to the hexstock mailing list to receive updates on new arrivals,
                        special offers and other discount information.</h4>
                    <h4 className='subHeading mt-5'>Subscribe to our newsletter</h4>
                    <hr></hr>
                    <button className='subscribeButton btn border rounded-0 p-3 px-5 mx-auto mt-4'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
    )
}

export default Discount;