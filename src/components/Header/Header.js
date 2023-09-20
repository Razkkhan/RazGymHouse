import React from 'react';
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='nav'>
    <h3 className='title'><FontAwesomeIcon className='icon' icon={faDumbbell}></FontAwesomeIcon> Raz Gymhouse</h3>

        </div>
    );
};

export default Header;