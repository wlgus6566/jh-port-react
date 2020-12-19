import React from 'react';
import Header from '../components/Header';
import './About.scss';
// import {TweenMax} from "gsap";

function AboutText({title,slogan}){
  return (
    <li>
      <p className="tit">{title}
        <span className="slogan">{slogan}</span>
      </p>
    </li>
  )
}

function AboutImg({imgurl,title}){
  return (
    <div className="image">
      <img src= {imgurl} alt={title}/>
    </div>
  )
}

function About(){
  return (
      <div id="wrap">
          <Header/>
          <section id="about">
            <div className="container">
              <h2 className="bigTitle">
                <span>ABOUT</span>
                <span>ME</span>
              </h2>
              <ul className="about">
                {aboutMe.map((txt) => (
                  <AboutText key={txt.id} title={txt.title} slogan={txt.slogan}/>
                ))}
              </ul>
              <div className="image-container">
                {aboutMe.map((txt) => (
                  <AboutImg key={txt.id} imgurl={txt.imgurl} title={txt.title}/>
                ))}
              </div>
            </div>
          </section>
      </div>
  )
}



const aboutMe = [
  {
    id: '1',
    title: 'KIM JI HYUN',
    slogan: "안녕하세요. 김지현입니다:)",
    imgurl: 'https://images.unsplash.com/photo-1565728693994-0b4d236b7dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
  }, {
    id: '2',
    title: 'WEB FRONTEND',
    slogan: '신입 웹프론트엔드 / 웹개발자',
    imgurl: 'https://images.unsplash.com/photo-1565728772631-a3d6acd57849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
  }, {
    id: '3',
    title: 'CODING LIFE',
    slogan: '코딩에 매료된',
    imgurl: 'https://images.unsplash.com/photo-1565728772631-a3d6acd57849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
  }, {
    id: '4',
    title: 'HARD WORKING',
    slogan: '근면 성실한',
    imgurl: 'https://images.unsplash.com/photo-1565728772631-a3d6acd57849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
  }, {
    id: '5',
    title: 'PASSIONATE',
    slogan: '열정가득한',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  }, {
    id: '6',
    title: 'POSITIVE',
    slogan: '긍정적인',
    imgurl: 'https://images.unsplash.com/photo-1565728693994-0b4d236b7dcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
  }, {
    id: '7',
    title: 'OPEN-MINDED',
    slogan: '열려있는 마인드',
    imgurl: 'https://images.unsplash.com/photo-1565728772631-a3d6acd57849?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
  }, {
    id: '8',
    title: 'courteous',
    slogan: '예의바른',
    imgurl: 'https://images.unsplash.com/photo-1565623513508-ffe2588e327c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
  }, {
    id: '9',
    title: '',
    slogan: 'Lorem ipsum dolor',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  }, {
    id: '10',
    title: 'I Love Food',
    slogan: 'love eating',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  }, {
    id: '11',
    title: 'Playful',
    slogan: '쾌활한',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  }, {
    id: '12',
    title: 'Meticulous',
    slogan: '꼼꼼한',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  },{
    id: '13',
    title: 'Trustworthy',
    slogan: '믿음직한',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  },{
    id: '14',
    title: 'Responsible',
    slogan: '책임감 있는',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  },{
    id: '15',
    title: 'Fun-loving',
    slogan: '잘노는',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  },{
    id: '16',
    title: 'Persistent',
    slogan: '끈질긴, 인내심있는',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  },{
    id: '17',
    title: 'Confident',
    slogan: '자신감있는',
    imgurl: 'https://images.unsplash.com/photo-1565676137134-10420000e371?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
  }
];


export default About;

// const $aboutList = document.querySelectorAll('.about li');


// $aboutList.forEach(function(item, index){

//   item.addEventListener('click',function(){
//     console.log(item,index);
    // document.querySelectorAll('.image-container .image').classList.remove('visible');
    // document.querySelectorAll('.image-container .image')[index].classList.add('hovered');
    // document.querySelectorAll('.image-container .image')[index].classList.add('visible');
  // });

  // item.addEventListener('mousemove',function(e){
  //   let imgWidth = this.outerWidth;
  //   let imgHeight = this.outerHeight;

  //   TweenMax.to(document.querySelector('.image-container'), .5, {
  //     left: e.clientX - (imgWidth / 2),
  //     top: e.clientY - (imgHeight / 2)
  //   });

  // });

  // item.addEventListener('mouseleave',function(){
  //   this.classList.remove('hovered');
  // });

// });