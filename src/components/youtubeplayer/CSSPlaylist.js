import React from 'react';
import './youtubeplayer.scss';

export default class CSS extends React.Component {
    render() {
        return (
            <div className='youtube'>
                <div className='youtube-player'>
                    <iframe
                        title='Intro to CSS'
                        className='youtube-player-main-video'
                        src="https://www.youtube.com/embed/7zFMyhc0otE"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                    <div className='youtube-player-playlist'>
                        <iframe
                            title='Flex Vs Grid'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/sl9vdVmfCLI"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <iframe
                            title='Animation vs Transition'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/MZD0mITZE-0" frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>                        
                        <iframe
                            title='CSS tips for portfolio'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/PwKu8WlcAMs" 
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <iframe
                            title='Workshop on Specificity'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/cIqGF-Cy_I4"
                             frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}
