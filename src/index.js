import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import Youtube from './service/youtube';

const httpClient = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: { key: process.env.REACT_APP_YOUTUBE_API_KEY },
});

const youtube = new Youtube(httpClient);

ReactDOM.render( <App youtube = {youtube}/>, document.getElementById('root') );

