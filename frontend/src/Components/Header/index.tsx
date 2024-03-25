import React from 'react';
import './styles.css';

import {ReactComponent as Logo} from '../../images/logo.svg';

function Header() {

    return (
        <header className="main-header">            
           <Logo></Logo>
           <div className="logo-text">
            <span className="logo-text-first">Site Game</span>
            <span className="logo-text-second"> Survey</span>
           </div>
        </header>
    );
}

export default Header;