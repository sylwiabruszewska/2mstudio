import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Container, Address } from 'components';

export const Footer = () => {
  return (
    <div className={styles['footer__page']}>
      <Container className={styles['footer__container']}>
        <div className={styles['box']}>
          <Logo className={styles['logo']} />
          <h2 className={styles['footer__heading']}>
            Architekt Białystok, Architektura, Projektowanie wnętrz
          </h2>
        </div>

        <div className={styles['box']}>
          <p className={styles['footer__text']}>Skontaktuj się z nami</p>
          <Address />
        </div>
      </Container>
      <Container>
        <div className={styles['copyright']}>
          Copyright © 2023 2m Studio Pracownia Projektowa |{' '}
          <a
            href="https://sylwia-bruszewska.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Sylwia Bruszewska
          </a>
        </div>
      </Container>
    </div>
  );
};
