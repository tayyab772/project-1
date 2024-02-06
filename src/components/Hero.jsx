import React from "react";

function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET
           DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>shope now</button>
          <button className="secondary-btn">category</button>
        </div>
        <div className="shopping">
          <p>Also available on</p>
          <div className="brand-icons">
            <img src="/Images/flipkart.png" alt="flipkart" />
            <img src="/Images/amazon.png" alt="amazon" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/Images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
}

export default Hero;
