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
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.cardContent}>
                <h2 className={styles.cardTitle}>Présentation</h2>
                <p className={styles.cardText}>
                  A 34 ans, après une première vie professionnelle, je me suis reconverti dans l'informatique. <br /> 
                  Après un BTS SIO option SLAM (développeur) et deux ans d'expériences professionnelles, j'ai décidé de poursuivre vers un Bachelor Cybersécurité.<br />
                  <br />
                  Actuellement en alternance pour un Bachelor Cybersécurité - Administrateur Réseau Cybersécurité à l'école CYBERSUP.
                </p>
                
                <div className={styles.socialSection}>
                  <h3 className={styles.socialTitle}>Réseaux sociaux</h3>
                  <div className={styles.socialLinks}>
                    <a 
                      href="https://www.linkedin.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://www.github.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.photoSection}>
                <div className={styles.photoPlaceholder}>
                  {/* Emplacement pour la photo */}
                </div>
                <div className={styles.podium}>
                  <div className={styles.podiumItem}>
                    <div className={styles.podiumIcon}>🏆</div>
                    <div className={styles.podiumLabel}>CTF</div>
                    <div className={styles.podiumCounter}>0</div>
                  </div>
                  <div className={styles.podiumItem}>
                    <div className={styles.podiumIcon}>💼</div>
                    <div className={styles.podiumLabel}>Pro</div>
                    <div className={styles.podiumCounter}>0</div>
                  </div>
                  <div className={styles.podiumItem}>
                    <div className={styles.podiumIcon}>🔧</div>
                    <div className={styles.podiumLabel}>Perso</div>
                    <div className={styles.podiumCounter}>0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

