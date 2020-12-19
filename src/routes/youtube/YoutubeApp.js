import React, { useCallback, useEffect, useState } from 'react';
import './Youtube.scss';
import VideoList from './VideoList';
import SearchHeader from './SearchHeader';
import Header from '../../components/Header';
import VideoDetail from './VideoDetail';

function YoutubeApp({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const selectVideo = video => {
    setSelectedVideo(video);
  };

  const search = useCallback(
    query => {
      setSelectedVideo(null);
      youtube
        .search(query) //
        .then(videos => setVideos(videos));
    },
    [youtube]
  );
    
  useEffect(() => {
    youtube
      .mostPopular() //
      
      .then(videos => setVideos(videos));
  }, [youtube]);

  return (
    <div id="wrap">
      <Header/>
      <section id="youtube">
        <div className="container">
          <h2 className="bigTitle">
            <span>Youtube</span>
          </h2>
          <div className="youtube-container">
            <SearchHeader onSearch={search} />
            <div className="list">
              {selectedVideo && (
                <VideoDetail video={selectedVideo} />
              )}
              <VideoList
                videos={videos}
                onVideoClick={selectVideo}
                display={selectedVideo ? 'full' : 'grid'}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default YoutubeApp;
