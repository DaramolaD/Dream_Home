import React from 'react';
import './News.css'
import { maintenance } from '../../assets/img/brand';

const News = () => {
  return (
    <div className='new bg1 secTop2'>
      <div className="container p20">
        <h3 className="sectionTitle">News</h3>
        <div className="mainTimgCont">
          <img src={maintenance} alt="maintenance" />
        </div>
      </div>
    </div>
  )
}

export default News