import React from 'react';
import './Main.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';



function MainContents({ title, alt, image, link, current }){
  return (
    <div className = {current}>
      <div className="img_wrap">
        <img className="img1" src= {image[0]} alt= {alt}/>
        <img className="img2" src= {image[1]} alt= {alt}/>
        <div className="break">break</div>
        <img className="img3" src= {image[2]} alt= {alt}/>
        <img className="img4" src= {image[3]} alt= {alt}/>
      </div>
      <h2 className="title">
        <Link to = {link}>          
          <span className="title_inner" data-splitting = "">{title[0]}</span>
          <span className="title_inner middle" data-splitting="">{title[1]}</span>
          <span className="title_inner" data-splitting = "">{title[2]}</span>
        </Link>
      </h2>
    </div>
  )
}

export default MainContents;

MainContents.propTypes = {
  id: PropTypes.number,
  title: PropTypes.array.isRequired,
  image: PropTypes.array.isRequired,
  current: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
} 