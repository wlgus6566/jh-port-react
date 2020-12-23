
import React from 'react';
import './About.scss';
import PropTypes from 'prop-types';

export function AboutText({ title,slogan }){
  return (
    <li>
      <p className="tit">{title}
        <span className="slogan">{slogan}</span>
      </p>
    </li>
  )
}

export function AboutImg({ image, title }){
  return (
    <div className="image">
      <img src= {image} alt={title}/>
    </div>
  )
}

AboutText.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  slogan: PropTypes.string.isRequired,
} 
AboutImg.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
} 
