import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1 style={titleStyle}>Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    textAlign:'center',
    background: '#333',
    color:'#fff',
    padding: '10px'
}

const titleStyle = {
    textTransform: 'uppercase',
}

const linkStyle = {
    color: '#ffff',
    textDecoration: 'none'
}

export default Header;
