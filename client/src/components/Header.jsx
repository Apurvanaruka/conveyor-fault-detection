import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <nav>
                <ul>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <button onClick={() => handleLogout()}>Logout</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

const handleLogout = () => {
    // Implement your logout logic here
    console.log('Logout clicked');
    // Example: Redirect to login page after logout
    // history.push('/login');
};

export default Header;
