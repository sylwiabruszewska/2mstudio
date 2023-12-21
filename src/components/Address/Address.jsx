import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

import styles from './Address.module.scss';

export const Address = () => {
  return (
    <address>
      <ul className={styles['address__list']}>
        <li className={styles['address__item']}>
          <div className={styles['list__content']}>
            <FaPhoneAlt className={styles.icon} />
            <a className={styles['address__link']} href="tel:+48604258222">
              +48 604 258 222
            </a>
          </div>
        </li>

        <li className={styles['address__item']}>
          <div className={styles['list__content']}>
            <FaEnvelope className={styles.icon} />
            <a
              className={styles['address__link']}
              href="mailto:marczak@2mstudio.org.pl"
            >
              marczak@2mstudio.org.pl
            </a>
          </div>
        </li>

        <li className={styles['address__item']}>
          <div className={styles['list__content']}>
            <FaHome className={styles.icon} />
            <a
              className={styles['address__link']}
              href="https://www.google.com/maps/place/2M+Studio+-+Pracownia+Projektowa/@53.1499476,23.2081865,17z/data=!4m6!3m5!1s0x471fffd2ad529349:0x1be59594f6b226c9!8m2!3d53.151338!4d23.2078297!16s%2Fg%2F11jzgkfr3g?entry=ttu"
              target="_blank"
              rel="noreferrer"
            >
              Mikołaja Gogola 1, 15-166 Białystok
            </a>
          </div>
        </li>
      </ul>
    </address>
  );
};
