import React from 'react';
import Header from '../../components/Header';
import './Script.scss';
import ScriptList from './ScriptList';


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
              {ScriptItem.map((item) => (
                <ScriptList key={item.id} 
                            title={item.title} 
                            period={item.period} 
                            imgurl={item.imgurl}  
                            url={item.url}  
                            imgurl={item.imgurl}  
                            using={item.using}  
                            etc={item.etc}
                            />
                ))}
            </ul>
          </div>
        </section>
      </div>
  )
}

const ScriptItem = [
  {
    id: '1',
    title: 'TO-DO-LIST',
    period: '2020.09',
    imgurl: './img/script_todolist.jpg',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    using: "html5/css3/javascript",
    etc: 'weather api/local storage',
  },{
    id: '2',
    title: 'CARROT-GAME',
    period: '2020.10',
    imgurl: './img/script_carrotgame.jpg',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    using: "html5/css3/javascript",
    etc: 'weather api/local storage',
  },{
    id: '3',
    title: 'FLIP-CARD-GAME',
    period: '2020.10',
    imgurl: './img/script_cardgame.jpg',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    using: "html5/css3/javascript",
    etc: 'weather api/local storage',
  },{
    id: '4',
    title: 'MUSIC-APP',
    period: '2020.10',
    imgurl: './img/script_music.jpg',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    using: "html5/css3/javascript",
    etc: 'weather api/local storage',
  },{
    id: '5',
    title: 'PAINT-BOARD',
    period: '2020.10',
    imgurl: './img/script_board.jpg',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    using: "html5/css3/javascript",
    etc: 'weather api/local storage',
  },{
    id: '6',
    title: 'APPLE-CLONE-SITE',
    period: '2020.10',
    imgurl: './img/script.jpg',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    using: "html5/css3/javascript",
    etc: 'weather api/local storage',
  }
];

export default Script;