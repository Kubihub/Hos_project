import React from 'react';
import BannerImage from "../Assets/banner.jpg"



const Home = () => {
  return (
    <div className=''>
       
       <div className='home-banner-container'>
       
       <div className='home-text-section'>
            <h1 className='primary heading'>
            Virtual healthcare for you
            </h1>
            <p className='primary-text'>
            Trafalgar provides progressive, and affordable 
healthcare, accessible on mobile and online 
for everyone
            </p>
            <button className='secondary-button'>
            Consult today
            </button>
       </div>
       <div className='home-image-container'>
        <img src={BannerImage} height="598px" width="693px"/>
       </div>
       </div>
    </div>
  )
}

export default Home