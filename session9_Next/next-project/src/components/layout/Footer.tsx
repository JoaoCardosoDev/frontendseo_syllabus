import React from 'react';

export default function Footer() {
    const footerStyle = {
        display: "flex",
        justifyContent: "space-around", 
        alignItems: "center", 
        backgroundColor: '#333', 
        color: 'white', 
        padding: "10px",
        position: "relative",
        bottom: "0",
        width: "100%",
    };
    
    return (
        <div style={footerStyle}>
            <div>© 2023 My Website</div>
            <div>Privacy Policy</div>
            <div>Terms of Service</div>
        </div>
    );
}