import React from 'react'
import { aboutUsData } from '../../assets/data/brandData'

const About = () => {
  return (
    <div className='about mTop3 border p20'>
        <div className="container">
            <h2 className="sectionTitle h2B">About Us</h2>
            <p className="para">{aboutUsData.about}</p>
        </div>
    </div>
  )
}

export default About