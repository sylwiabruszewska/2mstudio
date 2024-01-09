import { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

import styles from './ListPros.module.scss';

export const ListPros = () => {
  const start = 0;
  const duration = 2.5;

  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setIsVisible(true);
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <ul className={styles['pros-list']} ref={ref}>
      <li className={styles['pros-list__item']}>
        <span className={styles['pros-list__text']}>ponad</span>
        {isVisible && (
          <CountUp
            className={styles['pros-list__block']}
            start={start}
            end={15}
            duration={duration}
          />
        )}
        <span className={styles['pros-list__text']}>lat doświadczenia</span>
      </li>
      <li className={styles['pros-list__item']}>
        <span className={styles['pros-list__text']}>ponad</span>
        {isVisible && (
          <CountUp
            className={styles['pros-list__block']}
            start={start}
            end={346}
            duration={duration}
          />
        )}
        <span className={styles['pros-list__text']}>
          zaprojektowanych wnętrz
        </span>
      </li>
      <li className={styles['pros-list__item']}>
        <span className={styles['pros-list__text']}>ponad</span>
        {isVisible && (
          <CountUp
            className={styles['pros-list__block']}
            start={start}
            end={35}
            duration={duration}
          />
        )}
        <span className={styles['pros-list__text']}>coś fajnego waszego</span>
      </li>
    </ul>
  );
};
