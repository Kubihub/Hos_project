import React from "react";
import BannerImage from "../Assets/banner.jpg";

const Home = () => {
  return (
    <div className="">
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary heading">Leading healthcare providers</h1>
          <p className="primary-text">
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <button className="secondary-button">Consult today</button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} height="598px" width="693px" />
        </div>
      </div>

      <div>
        <div className="home-banner-container">
          <div className="home-text-section">
            <h1 className="primary heading">Download our mobile apps</h1>
            <p className="primary-text">
              Our dedicated patient engagement app and web portal allow you to
              access information instantaneously (no tedeous form, long calls,
              or administrative hassle) and securely
            </p>
            <button className="secondary-button">Download</button>
          </div>
          <div className="home-image-container">
            <img src={BannerImage} height="598px" width="693px" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
