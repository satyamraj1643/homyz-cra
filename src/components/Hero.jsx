import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import "./Hero.css";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" hero-container paddings innerWidth flexCenter">
        <div className="hero-left">
          <div className="hero-title">
            <div className="orange-circle"> </div>

            <h1>
              Discover <br /> Most Suitable <br /> Property
            </h1>
          </div>
          <div className=" flexColStart hero-description">
            <span>Find a variety of properties that suit you very easily</span>
            <span> Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="search-bar">
            <HiLocationMarker className="locologo" color="var(--blue)" size={25} />
            <input className="input" />
            <button className="button">Search</button>
          </div>

          <div className="stats">
            <div className=" stat1">
                 
                 <span className="stat-num"> <CountUp start={8800} end={9000} duration={4}/>  <span className="plus"> + </span> </span>
                <h5 className="stat-text">Products</h5>

            </div>
            <div className=" stat2">
                
                <span className="stat-num"> <CountUp start={1900} end={2000} duration={4}/> <span className="plus"> + </span></span>
                <h5 className="stat-text">Costumers</h5>

            </div>
            <div className=" stat2">
            <span className="stat-num"> <CountUp start={1} end={13} duration={4}/>  <span className="plus"> + </span> </span>
                 
                
                <h5 className="stat-text">Awards</h5>

            </div>
          </div>
        </div>

       
          <div className="image-container">
            <img src="./hero-image.png" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
