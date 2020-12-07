import React from 'react';
import Header from '../components/Header';
import './Script.scss';



function Script(){
  return (
      <div id="wrap">
        <Header/>
        <section id="script">
          <div className="container">
            <h2 className="bigTitle">
              <span>VALILLA JS</span>
              <span>PROJECT</span>
            </h2>
            <ul className="script_cont">
              <li className="project">
                <a href="#">
                  <div className="img">
                    <img src="./img/script_todolist.jpg" alt="script_todolist"/>
                  </div>
                  <div className="desc">
                    <h3>TO-DO-LIST</h3>
                    <p><strong>Period</strong><span>2020.09</span></p>
                    <p><strong>Using</strong><span>html5/css3/javascript</span></p>
                    <p><strong>Etc</strong><span>weather api/local storage</span></p>
                  </div>
                </a>
              </li>
              <li className="project">
                <a href="#">
                  <div className="img">
                    <img src="./img/script_carrotgame.jpg" alt="script_carrotgame"/>
                  </div>
                  <div className="desc">
                    <h3>CARROT-GAME</h3>
                    <p><strong>Period</strong><span>2020.09</span></p>
                    <p><strong>Using</strong><span>html5/css3/javascript</span></p>
                    <p><strong>Etc</strong><span>weather api/local storage</span></p>
                  </div>
                </a>
              </li>
              <li className="project">
                <a href="#">
                  <div className="img">
                    <img src="./img/script_cardgame.jpg" alt="script_cardgame"/>
                  </div>
                  <div className="desc">
                    <h3>FLIP-CARD-GAME</h3>
                    <p><strong>Period</strong><span>2020.09</span></p>
                    <p><strong>Using</strong><span>weather api/local storage</span></p>
                  </div>
                </a>
              </li>
              <li className="project">
                <a href="#">
                  <div className="img">
                    <img src="./img/script_music.jpg" alt="script_music"/>
                  </div>
                  <div className="desc">
                    <h3>MUSIP-APP</h3>
                    <p><strong>Period</strong><span>2020.09</span></p>
                    <p><strong>Using</strong><span>weather api/local storage</span></p>
                  </div>
                </a>
              </li>
              <li className="project">
                <a href="#">
                  <div className="img">
                    <img src="./img/script_board.jpg" alt="script_board"/>
                  </div>
                  <div className="desc">
                    <h3>PAINT-BOARD</h3>
                    <p><strong>Period</strong><span>2020.09</span></p>
                    <p><strong>Using</strong><span>weather api/local storage</span></p>
                  </div>
                </a>
              </li>
              <li className="project">
                <a href="#">
                  <div className="img">
                    <img src="./img/script.jpg" alt="script_music"/>
                  </div>
                  <div className="desc">
                    <h3>MUSIP-APP</h3>
                    <p><strong>Period</strong><span>2020.09</span></p>
                    <p><strong>Using</strong><span>weather api/local storage</span></p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>
  )
}

export default Script;