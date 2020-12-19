import React from 'react';
import './Website.scss';

const WebsiteList = ({num,title,url,desc,strong,using}) => {
        return (
          <li className="project">
            <div className="left">
              <h3 className="subTitle">{title}</h3>
              <div className={`img ${title}`}>
                <div className="img_bg">{title}</div>
              </div>
            </div>
            <div className="right">
              <span className="num">{num}</span>
              <hr/>
              <h4>{desc}</h4>
              <p className="desc">
                <strong>{strong}</strong>
                <span>{using}</span>
              </p>
              <a href={url} className="site-btn" target="_blank" rel="noreferrer"> 
                <span>SITE VIEW</span>
                <svg width="13px" height="10px" viewBox="0 0 13 10"><path d="M1,5 L11,5"></path><polyline points="8 1 12 5 8 9"></polyline></svg>
              </a>
            </div>
          </li>
        )
      }


export default WebsiteList;