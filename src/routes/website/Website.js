import React from 'react';
import Header from '../../components/Header';
import './Website.scss';
import WebsiteList from './WebsiteList';
import {gsap, TweenMax} from "gsap";


function Website(){
  return (
      <div id="wrap">
        <Header/>
        <section id="website">
          <div className="container">
            <h2 className="bigTitle">
              <span>WEBSITE</span>
              <span>PROJECTS</span>
            </h2>
              <ul className="web_cont">
                {WebsiteItem.map((item) => (
                  <WebsiteList  key={item.num} 
                                num={item.num} 
                                title={item.title} 
                                url={item.url}  
                                desc={item.desc}  
                                strong={item.strong}  
                                using={item.using}  
                                />
                  ))}
              </ul>
          </div>
        </section>
      </div>
  )
}

const WebsiteItem = [
  {
    num: '01',
    title: 'Standard',
    desc: 'This is the Web Standard Site.',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    strong: 'Web standard / Web Accessbility',
    using: 'html5/css3/jquery',
  },  {
    num: '02',
    title: 'Megabox',
    desc: 'This is the Megabox Site.',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    strong: 'Responsive / Web standard',
    using: 'html5/css3/jquery/photoshop/github',
  }, {
    num: '03',
    title: 'Innotech',
    desc: 'This is the Innotech Site.',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    strong: 'All pages completed(15pages) / Renewal',
    using: 'html5/css3/jquery/photoshop/github',
  },{
    num: '04',
    title: 'Apple',
    desc: 'This is the Apple Clone Site.',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    strong: 'Responsive / Clone',
    using: 'Vanilla Javascript / Canvas',
  },{
    num: '05',
    title: 'Bakery',
    desc: 'This is the Bakery Site.',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    strong: 'All pages completed(24pages)',
    using: 'html5/css3/jquery/javascript/github/photoshop/illustration',
  },{
    num: '06',
    title: 'Architect',
    desc: 'This is the Architecture Site.',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    strong: 'Responsive/scroll effect',
    using: 'html5/css3/jquery',
  },{
    num: '07',
    title: 'Hotel',
    desc: 'This is the Hotel Site.',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    strong: 'Responsive',
    using: 'html5/css3/jquery',
  },{
    num: '08',
    title: 'Pepsi',
    desc: 'This is the Pepsi Site.',
    url: 'http://wlgus6566.dothome.co.kr/todolist/index.html',
    strong: 'Responsive',
    using: 'html5/css3/jquery',
  }
];


// const project = document.querySelectorAll('.project');

// document.addEventListener('scroll', function() {
//   const currentScroll = document.documentElement.scrollTop;
//   console.log(currentScroll);
//   project.forEach(function(item){
//     console.log(item);
//     //         if(project.offsetTop - window.innerHeight < currentScroll && project.offsetTop + window.innerHeight > currentScroll ){
//             let offset = (currentScroll -project.offsetTop ) * 0.1;
//               TweenMax.to(project.querySelector('.subTitle'), 
//               { y: -offset, duration: 1, delay: 0, ease: "Power1.easeOut" });
//               TweenMax.to(project.querySelector('.right'),
//               { x: -offset, duration: 1, delay: 0.2, ease: "power4.out" });
//             // }
//   });
// });
//   project.forEach(function(item){
//     console.log(item);
//     //         if(project.offsetTop - window.innerHeight < currentScroll && project.offsetTop + window.innerHeight > currentScroll ){
//             let offset = (currentScroll -project.offsetTop ) * 0.1;
//               TweenMax.to(project.querySelector('.subTitle'), 
//               { y: -offset, duration: 1, delay: 0, ease: "Power1.easeOut" });
//               TweenMax.to(project.querySelector('.right'),
//               { x: -offset, duration: 1, delay: 0.2, ease: "power4.out" });
//             // }
//   });

export default Website;