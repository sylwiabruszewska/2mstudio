import PropTypes from 'prop-types';

import { FaEnvelope, FaPhoneAlt, FaHome } from 'react-icons/fa';
import styles from './Address.module.scss';

export const Address = ({ contain }) => {
  const addressOptions = {
    tel: {
      icon: <FaPhoneAlt className={styles.icon} />,
      text: '+48 604 310 260',
      link: 'tel:+48604310260',
    },
    email: {
      icon: <FaEnvelope className={styles.icon} />,
      text: '2mstudio@2mstudio.org.pl',
      link: 'mailto:2mstudio@2mstudio.org.pl',
    },
    location: {
      icon: <FaHome className={styles.icon} />,
      text: 'Mikołaja Gogola 1, 15-166 Białystok',
      link: 'https://www.google.com/maps/place/2M+Studio+-+Pracownia+Projektowa/@53.1499476,23.2081865,17z/data=!4m6!3m5!1s0x471fffd2ad529349:0x1be59594f6b226c9!8m2!3d53.151338!4d23.2078297!16s%2Fg%2F11jzgkfr3g?entry=ttu',
    },
  };

  const displayOptions = contain ? [contain] : ['tel', 'email', 'location'];

  return (
    <address>
      <ul className={styles['address__list']}>
        {displayOptions.map(option => (
          <li key={option} className={styles['address__item']}>
            {addressOptions[option].icon}
            <a
              className={styles['address__link']}
              href={addressOptions[option].link}
              target="_blank"
              rel="noreferrer"
            >
              {addressOptions[option].text}
            </a>
          </li>
        ))}
      </ul>
    </address>
  );
};

Address.propTypes = {
  contain: PropTypes.oneOf(['tel', 'email', 'location']),
};
