import styles from './Footer.module.scss';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { Container, Address } from 'components';

export const Footer = () => {
  return (
    <>
      <Container className={styles['footer__container']}>
        <div className={styles['box']}>
          <Logo className={styles['logo']} />
        </div>

        <div className={styles['box']}>
          <p className={styles['footer__text']}>Skontaktuj się z nami</p>
          <Address />
        </div>
      </Container>
      <Container>
        <div className={styles['copyright']}>
          Copyright © 2023 2M STUDIO Pracownia Projektowa |{' '}
          <a
            href="https://sylwia-bruszewska.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Sylwia Bruszewska
          </a>
        </div>
      </Container>
    </>
  );
};
