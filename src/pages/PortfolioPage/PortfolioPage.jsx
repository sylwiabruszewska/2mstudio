import { Helmet } from 'react-helmet';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { Container, BackLink } from 'components';
import styles from './PortfolioPage.module.scss';

const PortfolioPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/projekty') {
      const timeout = setTimeout(() => {
        navigate('/projekty/wszystkie');
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [location, navigate]);

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Portfolio</title>
      </Helmet>

      <Container>
        <div className={styles['btn-group']}>
          <Link to="wszystkie">
            <button className={styles['btn-iso']}>Wszystkie projekty</button>
          </Link>

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

        <Suspense>
          <Outlet />
        </Suspense>

        <BackLink />
      </Container>
    </>
  );
};

export default PortfolioPage;
