import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from './SliderPortfolio.module.scss';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from 'react-icons/md';
import image1 from '../../assets/images/slider/img1.jpg';
import image2 from '../../assets/images/slider/img2.jpg';
import image3 from '../../assets/images/slider/img3.jpg';
import image4 from '../../assets/images/slider/img4.jpg';

import image1Lg from '../../assets/images/slider/img1-large.webp';
import image2Lg from '../../assets/images/slider/img2-large.webp';
import image3Lg from '../../assets/images/slider/img3-large.webp';
import image4Lg from '../../assets/images/slider/img4-large.webp';

import image1Md from '../../assets/images/slider/img1-medium.webp';
import image2Md from '../../assets/images/slider/img2-medium.webp';
import image3Md from '../../assets/images/slider/img3-medium.webp';
import image4Md from '../../assets/images/slider/img4-medium.webp';

import image1Sm from '../../assets/images/slider/img1-small.webp';
import image2Sm from '../../assets/images/slider/img2-small.webp';
import image3Sm from '../../assets/images/slider/img3-small.webp';
import image4Sm from '../../assets/images/slider/img4-small.webp';

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
          srcSet={`${image1Sm} 300w, ${image1Md} 768w, ${image1Lg} 1024w`}
          sizes="100vw"
          className={styles['slider-img']}
          alt="Opis obrazka 1"
        />
      </div>
      <div>
        <img
          src={image2}
          srcSet={`${image2Sm} 300w, ${image2Md} 768w, ${image2Lg} 1024w`}
          sizes="100vw"
          className={styles['slider-img']}
          alt="Opis obrazka 2"
        />
      </div>
      <div>
        <img
          src={image3}
          srcSet={`${image3Sm} 300w, ${image3Md} 768w, ${image3Lg} 1024w`}
          sizes="100vw"
          className={styles['slider-img']}
          alt="Opis obrazka 3"
        />
      </div>
      <div>
        <img
          src={image4}
          srcSet={`${image4Sm} 300w, ${image4Md} 768w, ${image4Lg} 1024w`}
          sizes="100vw"
          className={styles['slider-img']}
          alt="Opis obrazka 4"
        />
      </div>
    </Slider>
  );
};
