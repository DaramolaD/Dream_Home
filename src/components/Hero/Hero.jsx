import React from 'react';
import "./Hero.css"
import heroData from '../../assets/data/heroData';
import { hero_img } from '../../assets/img';

const Hero = () => {
    
  return (
    <div className='hero'>
        <div className="hero_content p20">
          <h1 className="heading">
            We work to help you
            <br />
            Build your dream building
          </h1>
          <ul className="content_item">
            {heroData.map((heroItem) => (
              <li className="no" key={heroItem.no}>
                <p>{heroItem.no}</p>
                <div className="spanCont">
                  <span className="span">{heroItem.para1}</span>
                  <span>{heroItem.para2}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="hero_img">
          <img src={hero_img} alt="dreamy_hero_img" />
        </div>
    </div>
  )
}

export default Hero