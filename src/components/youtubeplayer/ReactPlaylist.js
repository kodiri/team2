import React from 'react';
import './youtubeplayer.scss';

export default class ReactVid extends React.Component {
    render() {
        return (
            <div className='youtube'>
                <div className='youtube-player'>
                    <iframe
                        title='Intro to React'
                        className='youtube-player-main-video'
                        src="https://www.youtube.com/embed/RnIZ1FCFKWg"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                </iframe>
                    <div className='youtube-player-playlist'>
                        <iframe
                            title='React props'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/2DR8VSmu0l0"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <iframe
                            title='React State'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/6RgRnb6zmZw"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <iframe
                            title='Event listeners and handlers'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/KTwAYUI8vRw"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <iframe
                            title='React Routing'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/K2qPAYwSO3E"
                            frameborder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}
