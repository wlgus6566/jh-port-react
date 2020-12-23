import React from 'react';

import Main from './routes/main/Main';
import About from './routes/about/About';
import Website from './routes/website/Website';
import Script from './routes/script/Script';

import YoutubeApp from './routes/youtube/YoutubeApp';
import Contact from './routes/Contact';
import { HashRouter, Route } from 'react-router-dom';

import './App.scss';



function App({youtube}) {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/about" component={About} />
      <Route path="/website" component={Website} />
      <Route
        path="/youtube"
        render={() => <YoutubeApp youtube={youtube} />} 
      />
      <Route path="/script" component={Script} />
      <Route path="/contact" component={Contact} />

    </HashRouter>
  )
}
export default App;
