import React from 'react';
import { Navigate, Link } from 'react-router-dom';
import './navBar.css';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="nav-links">
                    <li><Link to="/">Mini Twitter</Link></li>
                    <li><Link to="/">Feed</Link></li>
                    <li><Link to="/post">Post</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;
