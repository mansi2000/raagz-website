import styles from '../styles/Header.module.css'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src='/assets/black and white raagz logo.png' alt="Logo" width={100} height={50} />
      </div>
      {/* Hamburger Icon */}
      <button className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navigation Menu */}
      <nav className={`${styles.nav} ${isMenuOpen ? styles.show : ''}`}>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/courses">Courses</Link></li>
          <li><Link href="/rentals">Rentals</Link></li>
          <li><Link href="/about">About us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
