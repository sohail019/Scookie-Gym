import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import HeartRate from '../../assets/heart.png'
import ManImage from '../../assets/hero_image.png'
import BackgroundMan from '../../assets/hero_image_back.png'
import Calories from '../../assets/calories.png'

const Hero = () => {
  return (
    <div className="hero">

        {/* Left Side */}
      <div className="left-h">
        <Header />
        {/* The Best Ad */}
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>

        {/* Hero Heading */}
        <div className="hero-text">
          <div>
            {/* Stroke text class is created in APP.CSS */}
            <span className="stroke-text">SHAPE </span>
            <span>YOUR</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className="figures">
            <div>
                <span>+ 140</span>
                <span>EXPERT COACHES</span>
            </div>
            <div>
                <span>+ 595</span>
                <span>MEMBERS JOINED</span>
            </div>
            <div>
                <span>+ 60</span>
                <span>FITNESS PROGRAMS</span>
            </div>
        </div>

        {/* Two Buttons  */}
        <div className="hero-btn">
        <button className="btn">Get Started</button>
        <button className="btn">Learn More</button>
        </div>
      </div>
      

      {/* Right Side */}
      <div className="right-h">

        {/* Join Now Button */}
        <button className="btn">Join Now</button>
      
        {/* Heart Rate */}

        <div className="heart-rate">
            <img src={HeartRate} alt="HeartRate" />
            <span>Heart Rate</span>
            <span>118 Bpm</span>
        </div>

        {/* Man Image */}
        <img src={ManImage} alt="Hero Image" className="hero-img" srcset="" />
      
        {/* Background Man Image */}
        <img src={BackgroundMan} alt="Background Man Image" className="hero-bg-img" />
      
        {/* Calories */}
        <div className="calories">
            <img src={Calories} alt="" />
            <div>
                <span>Calories burned</span>
                <span>220 kcal</span>
            </div>
        </div>
      
      
      </div>
    </div>
  );
};

export default Hero;
