import React from "react";

const Services = () => {
  const images = [
    "/Assets/pic.jpg",
    "/Assets/pic.jpg",
    "/Assets/pic.jpg",
    "/Assets/pic.jpg",
    "/Assets/pic.jpg",
    "/Assets/pic.jpg",
  ];
  const texts = [
    "Search doctor",
    "Online pharmacy",
    "Consultation",
    "Details info",
    "Emergency care",
    "Tracking",
  ];
  return (
    <div>
      <div className="home-text-section">
        <h1 className="primary heading">Services</h1>
      </div>

      <div>
        <p className="p-style">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>

      <div className="flex-container">
        {images.map((image, index) => (
          <div key={index} className="flex-box">
            <img src={image} alt={`Image ${index + 1}`} />
            <p>{texts[index]}</p>
          </div>
        ))}
      </div>

      <button className="third-button">Learn More</button>
    </div>
  );
};

export default Services;
