import React from 'react';
import './Script.scss';

const ScriptList = ({title,period,imgurl,url,using,etc}) => {
        return (
          <li className="project">
            <a href = {url}>
              <div className="img">
                <img src = {imgurl} alt={title} />
              </div>
              <div className="desc">
                <h3>{title}</h3>
                <p><strong>Period</strong><span>{period}</span></p>
                <p><strong>Using</strong><span>{using}</span></p>
                <p><strong>Etc</strong><span>{etc}</span></p>
              </div>
            </a>
        </li>
        )
      }


export default ScriptList;