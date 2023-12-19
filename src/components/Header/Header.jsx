import { Link } from 'react-router-dom';

import { StyledLink } from './Header.styled';
import styles from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'components';

import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import { setIsMobileMenuOpen } from '../../redux/global/globalSlice';
import { selectIsMobileMenuOpen } from '../../redux/global/selectors';

export const Header = () => {
  const dispatch = useDispatch();
  const isMobileMenuVisible = useSelector(selectIsMobileMenuOpen);

  const toggleMobileMenu = () => {
    dispatch(setIsMobileMenuOpen(!isMobileMenuVisible));
  };

  return (
    <Container className={styles['page-header']}>
      <Link to="/" aria-label="strona główna">
        <Logo className={styles['logo']} />
      </Link>

      <nav className={styles['nav']}>
        <StyledLink to="/" aria-label="strona główna">
          Home
        </StyledLink>
        <StyledLink to="/blog" aria-label="blog">
          Blog
        </StyledLink>
        <StyledLink to="/projekty/wnetrza" aria-label="projekty">
          Projekty
        </StyledLink>
        <StyledLink to="/o-nas" aria-label="o nas">
          O nas
        </StyledLink>
        <StyledLink to="/kontakt" aria-label="kontakt">
          Kontakt
        </StyledLink>
      </nav>

      {/* MENU MOBILE */}
      <button
        className={styles['menu-toggle']}
        aria-expanded="false"
        aria-controls="mobile-menu"
        onClick={toggleMobileMenu}
      >
        <AiOutlineMenu />
      </button>

      {isMobileMenuVisible && (
        <div className={styles['mobile-menu']}>
          <button onClick={toggleMobileMenu} className={styles['close-button']}>
            <IoMdClose />
          </button>
          <StyledLink
            to="/"
            aria-label="strona główna"
            onClick={toggleMobileMenu}
          >
            Home
          </StyledLink>
          <StyledLink to="/blog" aria-label="blog" onClick={toggleMobileMenu}>
            Blog
          </StyledLink>
          <StyledLink
            to="/projekty/wnetrza"
            aria-label="projekty"
            onClick={toggleMobileMenu}
          >
            Projekty
          </StyledLink>
          <StyledLink to="/o-nas" aria-label="o nas" onClick={toggleMobileMenu}>
            O nas
          </StyledLink>
          <StyledLink
            to="/kontakt"
            aria-label="kontakt"
            onClick={toggleMobileMenu}
          >
            Kontakt
          </StyledLink>
        </div>
      )}
    </Container>
  );
};
