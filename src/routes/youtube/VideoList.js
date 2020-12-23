import React, { memo } from 'react';
import VideoItem from './VideoItem';
import './Youtube.scss';

const VideoList = memo(({videos, onVideoClick , display}) => {
    const displayType = display === 'full' ? 'full' : 'grid';
    return (
        <ul className = {`videos ${displayType}`}>
            {videos.map(video => 
                <VideoItem 
                key={video.id} 
                video={video} 
                onVideoClick = {onVideoClick} 
                display = {display}/>)}
        </ul>
    );
    }
)
export default VideoList;