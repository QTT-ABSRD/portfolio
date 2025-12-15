'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import { HeaderCharacter } from './HeaderCharacter';
import { SettingsButton } from './SettingsButton';

/**
 * Fonction pour obtenir le titre selon la route
 */
const getPageTitle = (pathname: string): string => {
  const titleMap: Record<string, string> = {
    '/home': 'Home',
    '/about-me': 'About me',
    '/toolbox': 'Toolbox',
    '/bibliotech': 'Bibliotech',
    '/projects': 'Projects',
    '/contact': 'Contact',
  };
  
  return titleMap[pathname] || 'Portfolio';
};

/**
 * Header fixe style néon rétro
 */
export const Header: React.FC = () => {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';
  const pageTitle = getPageTitle(pathname);

  // Ne pas afficher le header sur la landing page
  if (isLandingPage) {
    return null;
  }

  return (
    <header className={styles.header}>
      <HeaderCharacter key={pathname} />
      <div className={styles.headerContent}>
        <h1 key={pathname} className={`${styles.logo} ${styles.logoAnimated}`}>{pageTitle}</h1>
      </div>
      <SettingsButton />
    </header>
  );
};

