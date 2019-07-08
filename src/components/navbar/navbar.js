import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className='navbar'>
                    <Link to='/' id='link' className='navbar-item'>Home</Link>
                    <Link to='/javascript' className='navbar-item'>JavaScript</Link>
                    <Link to='/react' className='navbar-item'>React</Link>
                    <Link to='/css' className='navbar-item'>CSS</Link>
                    <Link to='/contact' id='link' className='navbar-item'>Contact</Link>
                </div>
            </div>
        );
    }
}

export default Navbar;