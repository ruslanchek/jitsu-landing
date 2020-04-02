import React, { FC } from 'react';
import styles from './Page.module.scss';
import { Limiter } from './Limiter';

export const Page: FC = ({ children }) => {
  return (
    <div className={styles.Page}>
      <Limiter>{children}</Limiter>
    </div>
  );
};
