import React from 'react';

const Footer = () => {
    const Year = new Date().getFullYear();
    return <p className="Footer">By Akash Meena ©️ {Year}</p>;
}

export default Footer;
