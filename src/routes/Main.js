import React from 'react';
import Header from '../components/Header';
import './Main.scss';
import {gsap} from "gsap";
import {Splitting} from "splitting";

function Main(){
  return (
    <div id="wrap">
      <Header color="transparent"/>
      <main id="main">
        <section id="mainCont">
          <div className="slides">
            <div className="slide slide--current">
              <div className="img_wrap">
                <img className="img1" src="./img/main_1-1.jpg" alt="main_1-1"/>
                <img className="img2" src="./img/main_1-2.jpg" alt="main_1-2"/>
                <div className="break">break</div>
                <img className="img3" src="./img/main_1-3.jpg" alt="main_1-3"/>
                <img className="img4" src="./img/main_1-4.jpg" alt="main_1-4"/>
              </div>
              <h2 className="title">
                <a href="#">
                  <span className="title_inner" data-splitting="">PORT</span>
                  <span className="title_inner middle" data-splitting="">JIHYUN'S</span>
                  <span className="title_inner" data-splitting="">FOLIO</span>
                </a>
              </h2>
            </div>
            <div className="slide">
              <div className="img_wrap">
                <img className="img1" src="./img/main_2-1.jpg" alt="main_2-1"/>
                <img className="img2" src="./img/main_2-2.jpg" alt="main_2-1"/>
                <div className="break">break</div>
                <img className="img3" src="./img/main_2-3.jpg" alt="main_1-1"/>
                <img className="img4" src="./img/main_2-4.jpg" alt="main_1-1"/>
              </div>
              <h2 className="title">
                <a href="#">
                  <span className="title_inner" data-splitting="">about</span>
                  <span className="title_inner middle" data-splitting="">of</span>
                  <span className="title_inner" data-splitting="">me</span>
                </a>
              </h2>
            </div>
            <div className="slide">
              <div className="img_wrap">
                <img className="img1" src="./img/main_3-2.jpg" alt="main_1-1"/>
                <img className="img2" src="./img/main_3-1.jpg" alt="main_1-1"/>
                <div className="break">break</div>
                <img className="img3" src="./img/main_3-3.jpg" alt="main_1-1"/>
                <img className="img4" src="./img/main_3-4.jpg" alt="main_1-1"/>
              </div>
              <h2 className= "title">
                <a href="#">
                  <span className="title_inner" data-splitting="">web</span>
                  <span className="title_inner middle" data-splitting="">of</span>
                  <span className="title_inner" data-splitting="">projects</span>	
                </a>
              </h2>
            </div>
            <div className="slide">
              <div className="img_wrap">
                <img className="img1" src="./img/main_4-1.jpg" alt="main_1-1"/>
                <img className="img2" src="./img/main_4-2.jpg" alt="main_1-1"/>
                <div className="break">break</div>
                <img className="img3" src="./img/main_4-3.jpg" alt="main_1-1"/>
                <img className="img4" src="./img/main_4-4.jpg" alt="main_1-1"/>
              </div>
              <h2 className="title">
                <a href="#">
                  <span className="title_inner" data-splitting="">script</span>
                  <span className="title_inner middle" data-splitting="">of</span>
                  <span className="title_inner" data-splitting="">projects</span>	
                </a>
              </h2>
            </div>
            <div className="slide">
              <div className="img_wrap">
                <img className="img1" src="./img/main_5-1.jpg" alt="main_1-1"/>
                <img className="img2" src="./img/main_5-2.jpg" alt="main_1-1"/>
                <div className="break">break</div>
                <img className="img3" src="./img/main_5-3.jpg" alt="main_1-1"/>
                <img className="img4" src="./img/main_5-4.jpg" alt="main_1-1"/>
              </div>
              <h2 className="title">
                <a href="#">
                  <span className="title_inner" data-splitting="">get</span>
                  <span className="title_inner middle" data-splitting="">in</span>
                  <span className="title_inner" data-splitting="">touch</span>	
                </a>
              </h2>
            </div>
            {/* <button className="slides_nav prev">
              <svg><path d="M82 10H9" stroke="#fff" strokeWidth="2"></path><path d="M10.474 0C7.988 4 4.118 7.422 0 10c4.156 2.539 7.865 6 10.474 10h2.485c-2.608-4-5.744-7.379-9.618-10C7.215 7.34 10.474 4 13 0h-2.526zm6 0C13.987 4 10.116 7.422 6 10c4.156 2.539 7.865 6 10.474 10h2.485c-2.606-4-5.745-7.379-9.617-10C13.214 7.34 16.474 4 19 0h-2.526z" fill="#fff"></path></svg>
            </button>
            <button className="slides_nav next">
              <svg><path d="M0 10h73" stroke="#fff" strokeWidth="2"></path><path d="M71.526 0C74.012 4 77.882 7.422 82 10c-4.156 2.539-7.865 6-10.474 10h-2.485c2.608-4 5.744-7.379 9.618-10C74.785 7.34 71.526 4 69 0h2.526zm-6 0C68.013 4 71.884 7.422 76 10c-4.156 2.539-7.865 6-10.474 10H63.04c2.606-4 5.745-7.379 9.617-10C68.786 7.34 65.526 4 63 0h2.526z" fill="#fff"></path></svg>
            </button> */}
          </div>
        </section>
      </main>
    </div>
  )
}


// Splitting();

// class Slide {
//   constructor(el) {
//       this.DOM = {el: el};
//       this.DOM.chars = this.DOM.el.querySelectorAll('#main .word > .char');
//       this.DOM.imgs = this.DOM.el.querySelectorAll('.img_wrap > img');
//   }
// }
// class Slideshow {
//     constructor(el) {
//         this.DOM = {el: el};
//         this.DOM.navigation = {
//             prev: this.DOM.el.querySelector('.slides_nav.prev'),
//             next: this.DOM.el.querySelector('.slides_nav.next')
//         };
//         this.slides = [];
//         [...this.DOM.el.querySelectorAll('.slide')].forEach(slide => this.slides.push(new Slide(slide)));

//         this.current = 0;

//         this.slidesTotal = this.slides.length;
//         this.positions = {
//             x: {
//                 next: [-150,0,0,150],
//                 prev: [0,150,-150,0]
//             },
//             y: {
//                 next: [0,-150,150,0],
//                 prev: [-150,0,0,150]
//             }
//         };
//         this.initEvents();
//     }
//     initEvents() {
//         this.onClickPrevBtn = () => this.navigate('prev');
//         this.onClickNextBtn = () => this.navigate('next');
//         this.DOM.navigation.prev.addEventListener('click', () => this.onClickPrevBtn());
//         this.DOM.navigation.next.addEventListener('click', () => this.onClickNextBtn());
//     }
//     navigate(direction) {
//         if ( this.isAnimating ) {
//             return false;
//         }
        
        
//         const currentSlide = this.slides[this.current];
//         this.current = direction === 'next' ? 
//             this.current < this.slidesTotal-1 ? ++this.current : 0:
//             this.current > 0 ? --this.current : this.slidesTotal-1;
//         const nextSlide = this.slides[this.current];

//         gsap.timeline({
//             defaults: {duration: 0.8, ease: 'power4.inOut'},
//             onStart: () => this.isAnimating = true,
//             onComplete: () => {
//                 // Remove "current" class
//                 currentSlide.DOM.el.classList.remove('slide--current');
//                 this.isAnimating = false;
//             }
//         })
//         .addLabel('start', 0)
//         // 글자
//         .to(currentSlide.DOM.chars, {
//             y: direction === 'next' ? '100%' : '-100%',
//             rotation: direction === 'next' ? 3 : -3,
//             stagger: direction === 'next' ? -0.015 : 0.015
//         }, 'start')
//         // 이미지
//         .to(currentSlide.DOM.imgs, {
//             x: pos => `${this.positions.x[direction][pos]}%`,
//             y: pos => `${this.positions.y[direction][pos]}%`,
//             opacity: 0
//         }, 'start')
//         .addLabel('upcoming', 0.4)
//         .add(() => {
//             // Set up upcoming images and text default style:
//             gsap.set(nextSlide.DOM.imgs, {opacity: 0});
//             gsap.set(nextSlide.DOM.chars, {
//                 y: direction === 'next' ? '-100%' : '100%', 
//                 rotation: direction === 'next' ? 3 : -3
//             });
//             // Add "current" class
//             nextSlide.DOM.el.classList.add('slide--current');
//         }, 'upcoming')
//         // Animate upcoming title in (stagger the characters)
//         .to(nextSlide.DOM.chars, {
//             y: '0%',
//             rotation: 0,
//             ease: 'power4',
//             stagger: direction === 'next' ? -0.015 : 0.015
//         }, 'upcoming')
//         // Animate upcoming images in
//         .to(nextSlide.DOM.imgs, {
//             startAt: {
//                 x: pos => `${this.positions.x[this.reverseDirection(direction)][pos]}%`,
//                 y: pos => `${this.positions.y[this.reverseDirection(direction)][pos]}%`,
//             },
//             x: '0%',
//             y: '0%',
//             opacity: 0.4,
//             ease: 'power4'
//         }, 'upcoming');
//     }
//     reverseDirection(direction) {
//         return direction === 'next' ? 'prev' : 'next';
//     }
// }

// new Slideshow(document.querySelector('#main .slides'));


export default Main;