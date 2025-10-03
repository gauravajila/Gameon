// src/components/Footer.jsx
import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Game On. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
