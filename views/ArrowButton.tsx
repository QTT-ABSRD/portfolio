import React from 'react';
import styles from './ArrowButton.module.css';

interface ArrowButtonProps {
  onClick?: () => void;
}

/**
 * Bouton avec flèche vers la droite style néon rétro
 */
export const ArrowButton: React.FC<ArrowButtonProps> = ({ onClick }) => {
  return (
    <button className={styles.arrowButton} onClick={onClick}>
      <span className={styles.arrow}>→</span>
    </button>
  );
};

