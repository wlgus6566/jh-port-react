import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import './Main.scss';
import MainContents from './MainContents';
import Loading from '../../components/Loading';

// import Slideshow from './gallerySlide.js';
// new Slideshow(document.querySelector('#main'));


class Main extends React.Component {
    state = {
        isLoading: true,
        main : []
    }

    getSlides = async () => {
        const {
            data : {
                data: { main },
            },
        } = await axios.get("https://wlgus6566.github.io/json/main.json");
     
        this.setState({ main, isLoading: false });
    }

    componentDidMount(){
            this.getSlides();
    }
    
    render() {
      const { isLoading, main } = this.state;
      return (
          <div id="wrap">
              <Header />
              {isLoading ? (
                  <Loading/>
              ) : (
                <main id="main">
                  <section id="mainCont">
                    <div className="slides">
                      {main.map((txt) => (
                                      <MainContents 
                                      key={txt.id} 
                                      title={txt.title} 
                                      image={txt.image}
                                      link={txt.link}
                                      current={txt.current}
                                      alt={txt.alt}/>
                                      ))}
                      <button className="prev">
                        <svg><path d="M82 10H9" stroke="#fff" strokeWidth="2"></path><path d="M10.474 0C7.988 4 4.118 7.422 0 10c4.156 2.539 7.865 6 10.474 10h2.485c-2.608-4-5.744-7.379-9.618-10C7.215 7.34 10.474 4 13 0h-2.526zm6 0C13.987 4 10.116 7.422 6 10c4.156 2.539 7.865 6 10.474 10h2.485c-2.606-4-5.745-7.379-9.617-10C13.214 7.34 16.474 4 19 0h-2.526z" fill="#fff"></path></svg>
                      </button>
                      <button className="next">
                        <svg><path d="M0 10h73" stroke="#fff" strokeWidth="2"></path><path d="M71.526 0C74.012 4 77.882 7.422 82 10c-4.156 2.539-7.865 6-10.474 10h-2.485c2.608-4 5.744-7.379 9.618-10C74.785 7.34 71.526 4 69 0h2.526zm-6 0C68.013 4 71.884 7.422 76 10c-4.156 2.539-7.865 6-10.474 10H63.04c2.606-4 5.745-7.379 9.617-10C68.786 7.34 65.526 4 63 0h2.526z" fill="#fff"></path></svg>
                      </button>
                    </div>
                  </section>
                </main>
              )}
          </div>

      )
  }
}

export default Main;

