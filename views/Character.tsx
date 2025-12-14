import React from 'react';
import styles from './Character.module.css';

/**
 * Composant personnage RPG vintage animé
 */
export const Character: React.FC = () => {
  return (
    <div className={styles.characterContainer}>
      <div className={styles.character}>
        {/* Tête */}
        <div className={styles.head}></div>
        {/* Corps */}
        <div className={styles.body}></div>
        {/* Bras gauche */}
        <div className={`${styles.arm} ${styles.armLeft}`}></div>
        {/* Bras droit */}
        <div className={`${styles.arm} ${styles.armRight}`}></div>
        {/* Jambe gauche */}
        <div className={`${styles.leg} ${styles.legLeft}`}></div>
        {/* Jambe droite */}
        <div className={`${styles.leg} ${styles.legRight}`}></div>
      </div>
    </div>
  );
};

