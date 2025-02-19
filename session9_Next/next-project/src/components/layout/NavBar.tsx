import React from 'react';

export default function NavBar() {
    const navStyle = {
        display: 'flex',
        backgroundColor: '#333',
        padding: '10px',
        justifyContent: 'space-around',
        alignItems: 'center',
    };

    const navItemStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '10px',
        cursor: 'pointer',
    };

    return (
        <nav style={navStyle}>
            <div style={navItemStyle}>Home</div>
            <div style={navItemStyle}>About</div>
            <div style={navItemStyle}>Contact</div>
        </nav>
    );
}