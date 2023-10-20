import React from 'react'
import './SubBanner.css'

const SubBanner = () => {
    return (
        <div className="container-fluid subBannerContainer mt-5">
            <div className="row sub-banner-row">
                <div className="subBannerLeft col-lg-6 col-md-5 col-sm-12 col-12">
                    <div className="subBannerContent">
                        <h2 className='subCategory'>Products Essentials</h2>
                        <h1 className='subBannerHeading'>Bottle with wooden Cork</h1>
                        <p className='subContent'>Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                            Anteposuerit litterarum formas.</p>
                        <button className='subscribeButton btn border rounded-0 p-3 px-5 mx-auto mt-4'>BUY NOW /
                            <span className='bannerPrice'>$59.25</span>
                        </button>
                    </div>
                </div>
                <div className="subBannerRight col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="subBannerContent">
                        <h2 className='subCategory'>Products Furniture</h2>
                        <h1 className='subBannerHeading'>Hauteville Plywood Chair</h1>
                        <p className='subContent'>Mirum est notare quam littera gothica, quam nunc putamus parum claram,
                            Anteposuerit litterarum formas.</p>
                        <button className='subscribeButton btn border rounded-0 p-3 px-5 mx-auto mt-4'>BUY NOW /
                            <span className='bannerPrice'>$59.25</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubBanner;