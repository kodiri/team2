import React from 'react';
import './youtubeplayer.scss';

class YoutubePlayer extends React.Component {

    render() {
        return (
            <div className='youtube'>
                <div className='youtuber-player'>
                    <iframe 
                        title='1'
                        className='youtube-player-main-video'
                        src="https://www.youtube.com/embed/84ORX6wZ1Ns" 
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen>
                    </iframe>

                    <div className='youtuber-player-playlist'>
                        <iframe 
                            title='2'   
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/49naUDCHJWQ" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>                          
                        </iframe>
                        <iframe 
                            title='3'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/2SiU-s5fD9s" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe> 
                        <iframe 
                            title='4'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/MRKmzcn8npU" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                        <iframe 
                            title='5'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/MRKmzcn8npU" 
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default YoutubePlayer;