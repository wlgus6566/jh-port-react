
import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import { AboutText, AboutImg } from './AboutContents';
import Loading from '../../components/Loading';

class About extends React.Component {
    state = {
        isLoading: true,
        about : []    //about 내용이 저장될 곳
    }

    getPorts = async () => {
        const {
            data : {
                data: { about },
            },
        } = await axios.get("https://wlgus6566.github.io/json/about.json");
        
        this.setState({ about, isLoading: false });
    }

    componentDidMount(){
            this.getPorts();
    }
    
    render() {
      const { isLoading, about } = this.state;
      return (
          <div id="wrap">
              <Header />
              {isLoading ? (
                  <Loading/>
              ) : (
                <section id="about">
                    <div className="container">
                        <h2 className="bigTitle">
                            <span>ABOUT</span>
                            <span>ME</span>
                        </h2>
                        <ul className="about">
                            {about.map((txt) => (
                            <AboutText key={txt.id} title={txt.title} slogan={txt.slogan}/>
                            ))}
                        </ul>
                        <div className="image-container">
                            {about.map((txt) => (
                            <AboutImg key={txt.id} image={txt.image} title={txt.title}/>
                            ))}
                        </div>
                  </div>
              </section>
              )}
              {/* <Footer /> */}
          </div>
      )
  }
}

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

