import React from 'react'
import Gallery from '../components/gallery/Gallery';
// import SubBanner from '../components/subBanner/SubBanner';
import SaleOff from '../components/saleOff/SaleOff';
import Blog from '../components/blog/Blog';
import Discount from '../components/discount/Discount';
import Footer from '../components/footer/Footer';

const Dashboard = () => {
    return (
        <>
            <Gallery />
            <SaleOff/>
            <Blog/>
            <Discount/>
            <Footer/>
        </>
    )
}

export default Dashboard;