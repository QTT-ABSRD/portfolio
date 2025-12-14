'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LandingPageData } from '@/models/LandingModel';
import { Character } from './Character';
import { SpeechBubble } from './SpeechBubble';
import { ArrowButton } from './ArrowButton';
import styles from './LandingView.module.css';

interface LandingViewProps {
  data: LandingPageData;
}

/**
 * Vue pour la page d'accueil
 */
export const LandingView: React.FC<LandingViewProps> = ({ data }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const router = useRouter();

  const handleButtonClick = () => {
    setIsAnimating(true);
    
    // Attendre que l'animation soit terminée avant de naviguer
    setTimeout(() => {
      router.push('/home');
    }, 2000); // Durée de l'animation
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {/* Première div : bonhomme et bulle */}
        <div className={styles.characterSection}>
          <div 
            className={`${styles.bubbleWrapper} ${isAnimating ? styles.hide : ''}`}
          >
            <SpeechBubble text="Bienvenue sur mon site web !" />
          </div>
          <div className={`${styles.characterWrapper} ${isAnimating ? styles.moveRight : ''}`}>
            <Character />
          </div>
        </div>

        {/* Deuxième div : bouton */}
        <div className={styles.buttonSection}>
          <div className={`${isAnimating ? styles.hide : ''}`}>
            <ArrowButton onClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

