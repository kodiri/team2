import React from 'react';
import './youtubeplayer.scss';

class JSYoutubePlayer extends React.Component {

    render() {
        return (
            <div className='youtube'>
                <div className='youtube-player'>
                    <iframe
                        title='Intro to JavaScript'
                        className='youtube-player-main-video'
                        src="https://www.youtube.com/embed/7mLbsgy6EcM"
                        frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>

                    <div className='youtube-player-playlist'>
                        <iframe
                            title='Var, let, const'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/Tgf9dRl9NPc"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <iframe
                            title='Find vs. Filter'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/JtTKIx4lhnY"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                        <iframe
                            title='Logical Operators'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/2SiU-s5fD9s"
                            frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                        <iframe
                            title='Higher Order Function'
                            className='youtube-player-playlist-item'
                            src="https://www.youtube.com/embed/V_Np9HrEohU"
                            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default JSYoutubePlayer;