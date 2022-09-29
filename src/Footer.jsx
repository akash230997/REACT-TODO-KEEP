import React from 'react';

const Footer = () => {
    const Year = new Date().getFullYear();
    return <p className="Footer">Copyright ©️ {Year}</p>;
}

export default Footer;
