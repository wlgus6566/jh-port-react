import React, {memo} from 'react';
import './Youtube.scss';

const VideoItem = memo(({ video, video:  { snippet }, onVideoClick, display}) => {
        const displayType = display === 'full' ? 'full' : 'grid';
        return (
            <li className = {`${displayType}`} onClick = {() => onVideoClick(video)}>
                <div className = "video">
                    <img className = "thumbnail" src={snippet.thumbnails.medium.url} alt="video thumbnail"/>
                    <div className = "metadata">
                        <p className = "title">{snippet.title}</p>
                        <p className = "channel">{snippet.channelTitle}</p>
                        <p className = "date">{snippet.publishedAt}</p>
                    </div>
                </div>
            </li>
        )
    }
)
export default VideoItem;

