import React from 'react'
import './Blog.css'
import LaptopDesk from '../../assets/image-9.jpg'
import WoodenChair from '../../assets/image-10.jpg'
import ReadingTable from '../../assets/image-11.jpg'


const Blog = () => {
    return (
        <div className="container blogContainer mt-5">
            <div className="row text-center">
        <div className='row mainHeading'>
          <div class="col-md-4 horizontalLine d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-1 border-bottom"></div>
          <div className="col-md-4 heading">
            <h1 className='heading'>Our Blog Posts</h1>
          </div>
          <div class="col-md-4 horizontalLine d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-1 border-bottom"></div>
        </div>
        <h4 className='subHeading mt-2'>mirum est notare quam littera gothica quam nook panthamas paum charm!</h4>
      </div>
            <div className="row mt-5">
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <img src={LaptopDesk} alt=""/>
                    <h2 className='blogHeading mt-3'>Anteposuerit litterarum formas.</h2>
                    <h4 className='blogSubHeading'>By <span className='blogName'>sahnewas sakil</span> / September 14, 2017</h4>
                    <p className='blogContent mt-2'>mirum est notare quam littera gothica quam nook panthamas paum charm!</p>
                    <button className='loadButton btn border rounded-0 p-3 px-4 mx-auto mt-3'>READ MORE</button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <img src={WoodenChair} alt=""/>
                    <h2 className='blogHeading mt-3'>Anteposuerit litterarum formas.</h2>
                    <h4 className='blogSubHeading'>By <span className='blogName'>sahnewas sakil</span> / September 14, 2017</h4>
                    <p className='blogContent mt-2'>mirum est notare quam littera gothica quam nook panthamas paum charm!</p>
                    <button className='loadButton btn border rounded-0 p-3 px-4 mx-auto mt-3'>READ MORE</button>
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                    <img src={ReadingTable} alt=""/>
                    <h2 className='blogHeading mt-3'>Anteposuerit litterarum formas.</h2>
                    <h4 className='blogSubHeading'>By <span className='blogName'>sahnewas sakil</span> / September 14, 2017</h4>
                    <p className='blogContent mt-2'>mirum est notare quam littera gothica quam nook panthamas paum charm!</p>
                    <button className='loadButton btn border rounded-0 p-3 px-4 mx-auto mt-3'>READ MORE</button>
                </div>
            </div>
            <hr className='mt-5' />
        </div>
    )
}

export default Blog;