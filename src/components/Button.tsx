import React, { FC } from 'react';
import styles from './Button.module.scss';
import classnames from 'classnames';

interface IProps {
  size?: 'ButtonLarge' | 'default';
}

export const Button: FC<IProps> = ({ size = 'default', children }) => {
  return (
    <a className={classnames(styles.Button, styles[size])} href='/'>
      {children}
    </a>
  );
};
