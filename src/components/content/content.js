import React from 'react';
import { Link } from 'react-router-dom';
import './content.scss';

class Content extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='content-container'>
                    <div className='content-item'>
            
                        <button className='home-button'></button>
                    </div>
                    <div className='content-item'>
                         <img 
                            className='image-topic content-item-react'
                            src={require('/Users/vincentman/Desktop/the-cerulean-project/src/images/icons/react.svg')}
                            alt='react'
                        />
                        <button className='home-button'>React</button>
                    </div>
                    <div className='content-item'>
                        <img 
                            className='image-topic content-item-css'
                            src={require('/Users/vincentman/Desktop/the-cerulean-project/src/images/icons/css3.svg')}
                            alt='css'
                        />
                        <button className='home-button'>CSS</button>
                    </div>
                    
                </div>  
             </div>
        )
        
    }
}

export default Content;