import React, { FC } from 'react';
import styles from './Header.module.scss';
import '../global.scss';
import { Link } from 'gatsby';
import { PATHS } from '../common/paths';
import { Limiter } from './Limiter';
import { Button } from './Button';
import { FiGlobe } from 'react-icons/fi';

interface IProps {}

export const Header: FC<IProps> = () => {
  return (
    <div className={styles.Header}>
      <Limiter>
        <div className={styles.Inner}>
          <Link to={PATHS.HOME}>
            <img className={styles.Logo} src={require('../images/jitsu-dark.svg')} alt='Jitsu' />
          </Link>
          <nav className={styles.Nav}>
            <Link className={styles.Link} to={PATHS.HOME}>
              How it works?
            </Link>
            <Link className={styles.Link} to={PATHS.HOME}>
              Tools
            </Link>
            <Link className={styles.Link} to={PATHS.HOME}>
              Learn
            </Link>
            <Link className={styles.Link} to={PATHS.HOME}>
              Pricing
            </Link>
          </nav>
          <div className={styles.Actions}>
            <Link className={styles.Link} to={PATHS.HOME}>
              <FiGlobe className={styles.Globe} />
            </Link>
            <Link className={styles.Link} to={PATHS.HOME}>
              Contact Us
            </Link>
            <Link className={styles.Link} to={PATHS.HOME}>
              Log in
            </Link>
            <Button>Try for free</Button>
          </div>
        </div>
      </Limiter>
    </div>
  );
};
