import React from 'react';
import './Youtube.scss';

const VideoDetail = ({video, video: {snippet}}) => (
    <section className="detail">
        <iframe
        className ="video"
        title="youtube video player"
        type="text/html"
        width="100%" 
        height="500px"
        src={`https://www.youtube.com/embed/${video.id}`}
        frameBorder="0" 
        allowFullScreen
        ></iframe>
        <h2>{snippet.title}</h2>
        <h3>{snippet.channelTitle}</h3>
        <pre className = "description"> {snippet.description}</pre>
    </section>
    );

export default VideoDetail;