import React from 'react';
import './content.scss';

class Content extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='content-container'>
                    <div className='content-item'>
                        <img 
                            className='image-topic'
                            src={require('/Users/vincentman/Desktop/the-cerulean-project/src/images/icons/javascript.svg')}
                            alt='js'
                        />
                        <button className='home-button'>JavaScript</button>
                    </div>
                    <div className='content-item'>
                         <img 
                            className='image-topic'
                            src={require('/Users/vincentman/Desktop/the-cerulean-project/src/images/icons/react.svg')}
                            alt='react'
                        />
                        <button className='home-button'>React</button>
                    </div>
                    <div className='content-item'>
                        <img 
                            className='image-topic'
                            src={require('/Users/vincentman/Desktop/the-cerulean-project/src/images/icons/css3.svg')}
                            alt='css'
                        />
                        <button className='css'>CSS</button>
                    </div>
                </div>  
             </div>
        )
        
    }
}

export default Content;