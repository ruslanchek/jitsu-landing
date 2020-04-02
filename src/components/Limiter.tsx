import React, { FC } from 'react';
import styles from './Limiter.module.scss';

export const Limiter: FC = ({ children }) => {
  return <div className={styles.Limiter}>{children}</div>;
};
