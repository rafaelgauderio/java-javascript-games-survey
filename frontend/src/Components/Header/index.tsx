import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../images/logo.svg';

function Header() {

    return (
        <header className="main-header">

            <Logo></Logo>
            <Link to="/">
                <div className="logo-text">
                    <span className="logo-text-first">Site Game</span>
                    <span className="logo-text-second"> Survey</span>
                </div>
            </Link>
        </header>
    );
}

export default Header;