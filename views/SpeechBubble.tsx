import React from 'react';
import styles from './SpeechBubble.module.css';

interface SpeechBubbleProps {
  text: string;
}

/**
 * Composant bulle de BD style néon rétro
 */
export const SpeechBubble: React.FC<SpeechBubbleProps> = ({ text }) => {
  return (
    <div className={styles.speechBubble}>
      <div className={styles.bubbleContent}>
        <p className={styles.bubbleText}>{text}</p>
      </div>
      <div className={styles.bubbleTail}></div>
    </div>
  );
};

