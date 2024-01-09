import { Outlet, useLocation } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';

import styles from './SharedLayout.module.scss';
import { Header, Footer, AnimatedRoute } from 'components';

export const SharedLayout = () => {
  const location = useLocation();
  const [isRootLevel, setIsRootLevel] = useState(true);

  useEffect(() => {
    setIsRootLevel(location.pathname.split('/').length <= 2);
  }, [location]);

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
      <div className={styles['wrapper']}>
        <header>
          <Header />
        </header>
        <main className={styles['page-main']}>
          <Suspense>
            {isRootLevel ? (
              <AnimatedRoute>
                <Outlet />
              </AnimatedRoute>
            ) : (
              <Outlet />
            )}
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
