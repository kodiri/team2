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
                    </div>
                    <div className='content-item'>
                         <img 
                            className='image-topic'
                            src={require('/Users/vincentman/Desktop/the-cerulean-project/src/images/icons/react.svg')}
                            alt='react'
                        />
                    </div>
                    <div className='content-item'>
                        <img 
                            className='image-topic'
                            src={require('/Users/vincentman/Desktop/the-cerulean-project/src/images/icons/css3.svg')}
                            alt='css'
                        />
                    </div>
                </div>  
             </div>
        )
        
    }
}

export default Content;