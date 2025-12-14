'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { HeaderCharacter } from './HeaderCharacter';

/**
 * Header fixe style néon rétro
 */
export const Header: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/home';

  return (
    <header className={styles.header}>
      {isHomePage && <HeaderCharacter />}
      <div className={styles.headerContent}>
        <h1 className={`${styles.logo} ${isHomePage ? styles.logoAnimated : ''}`}>Portfolio</h1>
      </div>
    </header>
  );
};

