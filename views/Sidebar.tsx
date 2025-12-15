'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Navbar latérale rétractable
 */
export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  const pathname = usePathname();

  const handleLinkClick = () => {
    onToggle(); // Fermer le menu après avoir cliqué sur un lien
  };

  return (
    <>
      <button 
        className={`${styles.menuButton} ${isOpen ? styles.menuButtonOpen : ''}`}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <span className={styles.menuIcon}></span>
        <span className={styles.menuIcon}></span>
        <span className={styles.menuIcon}></span>
      </button>
      
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.sidebarTitle}>Menu</h2>
        </div>
        <div className={`${styles.sidebarContent} ${isOpen ? styles.sidebarContentVisible : ''}`}>
          <ul className={styles.sidebarList}>
            <li>
              <Link 
                href="/home" 
                className={`${styles.sidebarLink} ${pathname === '/home' ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className={styles.sidebarLink}
                onClick={handleLinkClick}
              >
                Toolbox
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className={styles.sidebarLink}
                onClick={handleLinkClick}
              >
                Bibliotech
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className={styles.sidebarLink}
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link 
                href="/about-me" 
                className={`${styles.sidebarLink} ${pathname === '/about-me' ? styles.active : ''}`}
                onClick={handleLinkClick}
              >
                About me
              </Link>
            </li>
            <li>
              <Link 
                href="#" 
                className={styles.sidebarLink}
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      
      {isOpen && (
        <div 
          className={styles.overlay}
          onClick={onToggle}
        ></div>
      )}
    </>
  );
};

