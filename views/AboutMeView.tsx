'use client';

import React, { useState } from 'react';
import { AboutMePageData } from '@/models/AboutMeModel';
import { Sidebar } from './Sidebar';
import styles from './AboutMeView.module.css';

interface AboutMeViewProps {
  data: AboutMePageData;
}

/**
 * Vue pour la page About me
 */
export const AboutMeView: React.FC<AboutMeViewProps> = ({ data }) => {
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
          {/* Contenu About me à ajouter ici */}
        </div>
      </main>
    </div>
  );
};

