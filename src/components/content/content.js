import React from 'react';
import { Link } from 'react-router-dom';
import './content.scss';

class Content extends React.Component {

    render() {
        return (
            <div className='content'>
                <div className='content-container'>
                    <div className='content-item'>
                        <div className="content-item-javascript">
                            <img
                            className='image-topic content-item-javascript-img'
                            src={require('../../images/icons/javascript.png')}
                            alt='javascript'
                        /></div>
                        <button className='home-button'>
                            <Link to='/javascript'>
                            JavaScript 
                            </Link>
                            </button>
                    </div>
                    <div className='content-item'>
                        <div className="content-item-react"><img
                            className='image-topic content-item-react-img'
                            src={require('../../images/icons/react.png')}
                            alt='react'
                        /></div>
                        <button className='home-button'>
                            <Link to='/react'>React</Link>
                        </button>
                    </div>
                    <div className='content-item'>
                        <div className="content-item-css"><img
                            className='image-topic content-item-css-img'
                            src={require('../../images/icons/css.png')}
                            alt='css'
                        /></div>
                        <button className='home-button'>
                            <Link to='/css'>CSS</Link>
                        </button>
                    </div>

                </div>
            </div>
        )

    }
}

export default Content;