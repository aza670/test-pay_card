import React from 'react';
import './index.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo">My cards</Link>
            <Link to="/add-card" className="btn">Add card</Link>
        </div>
    );
};

export default Header;