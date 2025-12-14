'use client';

import React from 'react';
import styles from './Sidebar.module.css';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

/**
 * Navbar latérale rétractable
 */
export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onToggle }) => {
  return (
    <>
      <button 
        className={styles.menuButton}
        onClick={onToggle}
        aria-label="Toggle menu"
      >
        <span className={styles.menuIcon}></span>
        <span className={styles.menuIcon}></span>
        <span className={styles.menuIcon}></span>
      </button>
      
      <nav className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.sidebarContent}>
          <h2 className={styles.sidebarTitle}>Menu</h2>
          <ul className={styles.sidebarList}>
            <li><a href="#" className={styles.sidebarLink}>Accueil</a></li>
            <li><a href="#" className={styles.sidebarLink}>À propos</a></li>
            <li><a href="#" className={styles.sidebarLink}>Projets</a></li>
            <li><a href="#" className={styles.sidebarLink}>Contact</a></li>
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

