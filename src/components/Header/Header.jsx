import { Link } from 'react-router-dom';
import { useState } from 'react';

import { StyledLink } from './Header.styled';
import styles from './Header.module.scss';
import { Container } from 'components';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { BsFacebook } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prevState => !prevState);
  };

  return (
    <Container className={styles['page-header']}>
      <Link to="/" aria-label="strona główna">
        <Logo className={styles['logo']} />
      </Link>

      <div className={styles['box']}>
        <nav className={styles['nav']}>
          <StyledLink to="/nasz-zespol" aria-label="nasz zespół">
            Nasz zespół
          </StyledLink>

          <StyledLink to="/oferta" aria-label="oferta">
            Oferta
          </StyledLink>

          <StyledLink to="/projekty" aria-label="projekty">
            Projekty
          </StyledLink>

          <StyledLink to="/aktualnosci" aria-label="aktualności">
            Aktualności
          </StyledLink>

          <StyledLink to="/kontakt" aria-label="kontakt">
            Kontakt
          </StyledLink>
        </nav>

        <ul className={styles['social-links']}>
          <li>
            <a
              className={styles['social-links__link']}
              href="https://www.facebook.com/2mstudiopracowniaprojektowa/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otwórz mój profil na Facebooku"
            >
              <BsFacebook />
            </a>
          </li>
          <li>
            <a
              className={styles['social-links__link']}
              href="https://www.instagram.com/2mstudiopracownia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otwórz mój profil na Instagramie"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>

        {/* MENU MOBILE */}
        <button
          className={styles['menu-toggle']}
          aria-expanded="false"
          aria-controls="mobile-menu"
          onClick={toggleMobileMenu}
        >
          <AiOutlineMenu className={styles['menu-toggle__icon']} />
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className={styles['mobile-menu']}>
          <button onClick={toggleMobileMenu} className={styles['close-button']}>
            <IoMdClose />
          </button>
          <StyledLink
            to="/nasz-zespol"
            aria-label="o nas"
            onClick={toggleMobileMenu}
          >
            Nasz zespół
          </StyledLink>

          <StyledLink
            to="/oferta"
            aria-label="o nas"
            onClick={toggleMobileMenu}
          >
            Oferta
          </StyledLink>

          <StyledLink
            to="/projekty"
            aria-label="projekty"
            onClick={toggleMobileMenu}
          >
            Projekty
          </StyledLink>

          <StyledLink
            to="/aktualnosci"
            aria-label="blog"
            onClick={toggleMobileMenu}
          >
            Aktualności
          </StyledLink>

          <StyledLink
            to="/kontakt"
            aria-label="kontakt"
            onClick={toggleMobileMenu}
          >
            Kontakt
          </StyledLink>

          <ul className={styles['social-links']}>
            <li>
              <a
                className={styles['social-links__link']}
                href="https://www.facebook.com/2mstudiopracowniaprojektowa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Otwórz mój profil na Facebooku"
              >
                <BsFacebook />
              </a>
            </li>
            <li>
              <a
                className={styles['social-links__link']}
                href="https://www.instagram.com/2mstudiopracownia/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Otwórz mój profil na Instagramie"
              >
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
      )}
    </Container>
  );
};
