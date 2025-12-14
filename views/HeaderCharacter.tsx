import React from 'react';
import styles from './HeaderCharacter.module.css';

/**
 * Personnage adapté pour le header
 */
export const HeaderCharacter: React.FC = () => {
  return (
    <div className={styles.headerCharacterContainer}>
      <div className={styles.headerCharacter}>
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

