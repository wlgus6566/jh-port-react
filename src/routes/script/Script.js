import React from 'react';
import axios from 'axios';
import Header from '../../components/Header';
import './Script.scss';
import ScriptList from './ScriptList';
import Loading from '../../components/Loading';

class Script extends React.Component {
    state = {
        isLoading: true,
        script : []
    }

    getLists = async () => {
        const {
            data : {
                data: { script },
            },
        } = await axios.get("https://wlgus6566.github.io/json/script.json");
        
        this.setState({ script, isLoading: false });
    }

    componentDidMount(){
        this.getLists();
    }
    
    render() {
      const { isLoading, script } = this.state;
      return (
          <div id="wrap">
              <Header />
              {isLoading ? (
                  <Loading/>
              ) : (
                <section id="script">
                  <div className="container">
                    <h2 className="bigTitle">
                      <span>VALILLA JS</span>
                      <span>PROJECT</span>
                    </h2>
                    <ul className="script_cont">
                      {script.map((item) => (
                        <ScriptList key={item.id} 
                                    title={item.title} 
                                    period={item.period} 
                                    url={item.url}  
                                    imgurl={item.imgurl}  
                                    using={item.using}  
                                    etc={item.etc}
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

export default Script;
