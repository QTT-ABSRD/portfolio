'use client';

import React, { useState } from 'react';
import { HomePageData } from '@/models/HomeModel';
import { Sidebar } from './Sidebar';
import styles from './HomeView.module.css';

interface HomeViewProps {
  data: HomePageData;
}

/**
 * Vue pour la page d'accueil principale
 */
export const HomeView: React.FC<HomeViewProps> = ({ data }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.container}>
      <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      <main className={`${styles.main} ${isSidebarOpen ? styles.mainWithSidebar : ''}`}>
        <div className={styles.content}>
          <h1>{data.title}</h1>
          {/* Contenu principal à charger ici */}
        </div>
      </main>
    </div>
  );
};

