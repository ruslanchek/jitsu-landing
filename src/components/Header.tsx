import React, { FC } from 'react';
import styles from './Header.module.scss';
import '../global.scss';
import { Link } from 'gatsby';
import { PATHS } from '../common/paths';
import { Limiter } from './Limiter';

interface IProps {}

export const Header: FC<IProps> = () => {
  return (
    <div className={styles.Header}>
      <Limiter>
        <div className={styles.Inner}>
          <Link to={PATHS.HOME}>
            <img className={styles.Logo} src={require('../images/jitsu-dark.svg')} alt='Jitsu' />
          </Link>
        </div>
      </Limiter>
    </div>
  );
};
