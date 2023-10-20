import React from 'react'
import Gallery from '../components/gallery/Gallery';
import SaleOff from '../components/saleOff/SaleOff';
import Blog from '../components/blog/Blog';
import Discount from '../components/discount/Discount';
import Footer from '../components/footer/Footer';
import SubBanner from '../components/subBanner/SubBanner';
import Banner from '../components/banner/Banner';
import Hero from '../components/Hero/Hero';
import Header from '../components/Header/Header';

const Dashboard = () => {
    return (
        <>
            <Header />
            <Banner />
            <Hero />
            <Gallery />
            <SubBanner />
            <SaleOff />
            <Blog />
            <Discount />
            <Footer />
        </>
    )
}

export default Dashboard;