import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='nav'>
    <h3><FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon> AP Gymnasium</h3>
        <div className='nav-link'>
        <a href="/Home">Home</a>
        <a href="/Tutorial">Tutorial</a>
        <a href="/Contact">Contact</a>
        <a href="/About Me">About Me</a>
        </div>
        </div>
    );
};

export default Header;