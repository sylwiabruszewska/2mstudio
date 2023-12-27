import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';

import styles from './SharedLayout.module.scss';
import { Header, Footer, Loader, AnimatedRoute } from 'components';
import { selectIsLoading } from '../redux/global/selectors';

export const SharedLayout = () => {
  const isLoading = useSelector(selectIsLoading);

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }, []);

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
          <AnimatedRoute>
            <Suspense>
              <Outlet />
            </Suspense>
          </AnimatedRoute>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
      <ScrollToTop />
    </>
  );
};
