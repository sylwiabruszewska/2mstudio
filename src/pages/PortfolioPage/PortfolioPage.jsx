import { Helmet } from 'react-helmet';
import { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

import { Container, BackLink } from 'components';
import styles from './PortfolioPage.module.scss';
import { StyledLink } from './PortoflioPage.styled';

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
        <div className={styles['link-group']}>
          <StyledLink to="wszystkie">Wszystkie projekty</StyledLink>

          <StyledLink to="wnetrza">Wnętrza</StyledLink>

          <StyledLink to="budynki-mieszkalne">Budynki mieszkalne</StyledLink>

          <StyledLink to="budynki-uslugowe">Budynki usługowe</StyledLink>

          <StyledLink to="budynki-przemyslowe">Budynki przemysłowe</StyledLink>
        </div>

        <Suspense>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default PortfolioPage;
