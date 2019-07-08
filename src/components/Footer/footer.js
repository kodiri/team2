import React from 'react';
import GitHub from './links-icons/GitHub.png';
import Facebook from './links-icons/Facebook.png';
import Instagram from './links-icons/Instagram.png';
import Kodiri from './links-icons/Kodiri.png';
import MeetUp from './links-icons/MeetUp.png';

import './footer.scss';

export default class Footer extends React.Component {
    render() {
        return(
            <div className='footer'>
                <div className='container'>
                <div className='item'><img src={GitHub}></img>GitHub</div>
                <div className='item'><img src={Facebook}/>Facebook</div>
                <div className='item'><img src={Instagram}/>Instagram</div>
                <div className='item'><img src={Kodiri}/>Kodiri</div>
                <div className='item'><img src={MeetUp}/>MeetUp</div>   
                </div>
            </div>
        )
    }
}