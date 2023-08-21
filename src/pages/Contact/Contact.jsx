import React from 'react'
import "./Contact.css"
import { maintenance } from '../../assets/img/brand'

const Contact = () => {
  return (
    <div className='contact bg1 secTop2'>
      <div className="container p20">
        <h3 className="sectionTitle">Contact</h3>
        <div className="mainTimgCont">
          <img src={maintenance} alt="maintenance" />
        </div>
      </div>
    </div>
  )
}

export default Contact