import React from 'react'
import "./hero.css"
import bg from "../Image/home-image.png"
import icon from "../Image/home-image-icons.png"
import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate=useNavigate();
  const mine=()=>{
    navigate("/mine")
  }
  return (
    <div className='hero-warpper' >
      <img src={bg} alt="" />
      <div className="hero-text-wrapper">
        <div className="hero-text">
          <h2>Data-powered solutions <br /> for Industial Excellence</h2>
          <button onClick={mine}>Read More</button>
        </div>
        <div className="hero-image-logo">
          <img src={icon} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero
