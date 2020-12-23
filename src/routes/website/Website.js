import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import './Website.scss';
import WebsiteList from './WebsiteList';
import Loading from '../../components/Loading';
import {gsap, TweenMax} from "gsap";
class Website extends React.Component {
    state = {
        isLoading: true,
        main : []
    }

    getLists = async () => {
        const {
            data : {
                data: { main },
            },
        } = await axios.get("https://wlgus6566.github.io/json/web.json");
        
        this.setState({ main, isLoading: false });
    }

    componentDidMount(){
      setTimeout(() => {
        this.getLists();
      }, 1000);
    }
    
    render() {
      const { isLoading, main } = this.state;
      return (
          <div id="wrap">
              <Header />
              {isLoading ? (
                  <Loading/>
              ) : (
                <section id="website">
                  <div className="container">
                    <h2 className="bigTitle">
                      <span>WEBSITE</span>
                      <span>PROJECTS</span>
                    </h2>
                      <ul className="web_cont">
                        {main.map((item) => (
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
              )}
              {/* <Footer /> */}
          </div>
      )
  }
}

export default Website;

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
  // project.forEach(function(item){
  //   console.log(item);
  //   //         if(project.offsetTop - window.innerHeight < currentScroll && project.offsetTop + window.innerHeight > currentScroll ){
  //           let offset = (currentScroll -project.offsetTop ) * 0.1;
  //             TweenMax.to(project.querySelector('.subTitle'), 
  //             { y: -offset, duration: 1, delay: 0, ease: "Power1.easeOut" });
  //             TweenMax.to(project.querySelector('.right'),
  //             { x: -offset, duration: 1, delay: 0.2, ease: "power4.out" });
  //           // }
  // });

