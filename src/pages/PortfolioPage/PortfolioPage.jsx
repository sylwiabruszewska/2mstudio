import { Helmet } from 'react-helmet';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { Container, BackLink } from 'components';
import styles from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Portfolio</title>
      </Helmet>

      <Container>
        <div className={styles['btn-group']}>
          <Link to="wnetrza">
            <button className={styles['btn-iso']}>Wnętrza</button>
          </Link>

          <Link to="budynki-mieszkalne">
            <button className={styles['btn-iso']}>Budynki mieszkalne</button>
          </Link>

          <Link to="budynki-uslugowe">
            <button className={styles['btn-iso']}>Budynki usługowe</button>
          </Link>

          <Link to="budynki-przemyslowe">
            <button className={styles['btn-iso']}>Budynki przemysłowe</button>
          </Link>
        </div>

        <Suspense fallback={''}>
          <Outlet />
        </Suspense>

        <BackLink />
      </Container>
    </>
  );
};

export default PortfolioPage;
