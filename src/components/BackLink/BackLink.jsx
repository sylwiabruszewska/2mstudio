import { Link } from 'react-router-dom';

import styles from './BackLink.module.scss';
import { MdOutlineArrowBackIos } from 'react-icons/md';

export const BackLink = () => {
  const handleGoBack = event => {
    event.preventDefault();
    window.history.back();
  };

  return (
    <Link className={styles['back-link']} onClick={handleGoBack}>
      <MdOutlineArrowBackIos />
      Powrót do poprzedniej strony
    </Link>
  );
};
