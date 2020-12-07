import React from 'react';

import Main from './routes/Main';
import About from './routes/About';
import Website from './routes/Website';
import Script from './routes/Script';
import Contact from './routes/Contact';
import { HashRouter, Route } from 'react-router-dom';
import './App.scss';


function App() {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Main} />
      <Route path="/about" component={About} />
      <Route path="/website" component={Website} />
      <Route path="/script" component={Script} />
      <Route path="/contact" component={Contact} />
    </HashRouter>
  )
}
export default App;
