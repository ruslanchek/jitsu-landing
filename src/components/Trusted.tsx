import React, { FC } from 'react';
import styles from './Trusted.module.scss';

export const Trusted: FC = () => {
  return (
    <div className={styles.Trusted}>
      <h3>TRUSTED BY THE WORLD’S BEST TEAMS</h3>
      <div className={styles.Roulette}>
        <img className={styles.Image} src="https://luna1.co/ec349f.png"/>
        <img className={styles.Image} src="https://luna1.co/hp-img-farm-exp-Sales-force-logo@2x.png"/>
        <img className={styles.Image} src="https://luna1.co/hp-img-farm-exp-Deloitte-logo@2x.png"/>
        <img className={styles.Image} src="https://luna1.co/hp-img-farm-exp-Nasa-logo@2x.png"/>
        <img className={styles.Image} src="https://luna1.co/hp-img-farm-exp-Meals-logo@2x.png"/>
        <img className={styles.Image} src="https://luna1.co/hp-img-farm-exp-ComcastNBC-logo@2x.png"/>
        <img className={styles.Image} src="https://luna1.co/hp-img-farm-exp-Timbuk2-logo@2x.png"/>
      </div>
    </div>
  );
};
