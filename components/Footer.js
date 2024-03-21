// Footer.jsx
import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css' // Importing the CSS module

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
          <ul>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      <div className={styles.socialLinks}>
        <a href="https://www.instagram.com/raagz.in/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com/company/raagz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <div>
          <p>© 2024 Madyam Music Private Limited. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
