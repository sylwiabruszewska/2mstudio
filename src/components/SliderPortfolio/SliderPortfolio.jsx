import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './SliderPortfolio.module.scss';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import image1 from '../../assets/images/slider/img1.webp';
import image2 from '../../assets/images/slider/img2.webp';
import image3 from '../../assets/images/slider/img3.webp';
import image4 from '../../assets/images/slider/img4.webp';

export const SliderPortfolio = () => {
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <Slider {...settings} className={styles['carousel-wrapper']}>
      <div>
        <img
          src={image1}
          className={styles['slider-img']}
          alt="Opis obrazka 1"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src={image2}
          className={styles['slider-img']}
          alt="Opis obrazka 2"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src={image3}
          className={styles['slider-img']}
          alt="Opis obrazka 3"
          loading="lazy"
        />
      </div>
      <div>
        <img
          src={image4}
          className={styles['slider-img']}
          alt="Opis obrazka 4"
          loading="lazy"
        />
      </div>
    </Slider>
  );
};
