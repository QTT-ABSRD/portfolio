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
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Bienvenue</h2>
              <p className={styles.cardText}>
                Bienvenue sur mon site web ! Je suis ravi de vous accueillir dans mon espace numérique.
              </p>
              <p className={styles.cardText}>
                L'objectif de ce portfolio est de présenter mes projets, mes compétences et mon parcours professionnel. 
                C'est un espace où je partage mes réalisations et où vous pouvez découvrir mon travail.
              </p>
            </div>
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>En construction</h2>
              <p className={styles.cardText}>
                Ce site est actuellement en construction. De nouvelles fonctionnalités et du contenu seront ajoutés prochainement.
              </p>
              <p className={styles.cardText}>
                Restez à l'écoute pour découvrir les prochaines features qui arrivent bientôt !
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

