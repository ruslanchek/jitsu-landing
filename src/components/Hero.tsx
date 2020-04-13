import React, { FC } from 'react';
import styles from './Hero.module.scss';

export const Hero: FC = ({ children }) => {
  return <div className={styles.Hero}>{children}</div>;
};
