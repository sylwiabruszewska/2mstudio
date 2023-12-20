import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import styles from './SharedLayout.module.scss';
import { Header, Footer, Loader } from 'components';
import { selectIsLoading } from '../redux/global/selectors';

export const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, [pathname]);

    return null;
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className={styles['wrapper']}>
        <header>
          <Header />
        </header>
        <main className={styles['page-main']}>
          <Suspense>
            <Outlet />
          </Suspense>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <ScrollToTop />
    </>
  );
};
