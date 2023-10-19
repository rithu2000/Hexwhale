import React from 'react'
import './SubBanner.css'

const SubBanner = () => {
    return (
        <div className="container-fluid bg-image">
            <div className="row">
                <div className="col-md-6 mx-auto overlay">
                    <h1>Your Content Goes Here</h1>
                    <p>Additional text and elements go here.</p>
                </div>
            </div>
        </div>
    )
}

export default SubBanner;