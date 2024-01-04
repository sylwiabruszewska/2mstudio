import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './ListTrust.module.scss';
import sprite from 'assets/images/icons.svg';

import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';

export const ListTrust = () => {
  const PrevArrow = ({ onClick }) => (
    <div className={styles['prev-arrow-custom']} onClick={onClick}>
      <MdOutlineArrowBackIos className={styles['arrow-icon']} />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div className={styles['next-arrow-custom']} onClick={onClick}>
      <MdArrowForwardIos className={styles['arrow-icon']} />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '10px',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className={styles['slick-list']}>
      <svg className={styles['clients-icon']} width="220" height="100">
        <use href={sprite + '#icon-logo1'}></use>
      </svg>

      <svg className={styles['clients-icon']} width="220" height="100">
        <use href={sprite + '#icon-logo2'}></use>
      </svg>

      <svg className={styles['clients-icon']} width="220" height="100">
        <use href={sprite + '#icon-logo3'}></use>
      </svg>

      <svg className={styles['clients-icon']} width="220" height="100">
        <use href={sprite + '#icon-logo4'}></use>
      </svg>

      <svg className={styles['clients-icon']} width="220" height="100">
        <use href={sprite + '#icon-logo5'}></use>
      </svg>
    </Slider>
  );
};
