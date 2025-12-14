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
            <li><a href="#" className={styles.sidebarLink}>Home</a></li>
            <li><a href="#" className={styles.sidebarLink}>Toolbox</a></li>
            <li><a href="#" className={styles.sidebarLink}>Bibliotech</a></li>
            <li><a href="#" className={styles.sidebarLink}>Projects</a></li>
            <li><a href="#" className={styles.sidebarLink}>About me</a></li>
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

