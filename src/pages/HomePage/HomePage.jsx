import { Helmet } from 'react-helmet';

import styles from './HomePage.module.scss';
import {
  Container,
  Section,
  ListPros,
  SliderPortfolio,
  ListStages,
  ListTrust,
} from 'components';
import photo from 'assets/images/photo-home.jpg';
import photoMd from 'assets/images/photo-home-medium.webp';
import photoSm from 'assets/images/photo-home-small.webp';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa</title>
      </Helmet>

      <Container>
        <SliderPortfolio />

        <div className={styles['about']}>
          <div className={styles['about__text']}>
            <h1 className={styles['about__heading']}>
              2M STUDIO Pracownia Projektowa
            </h1>
            <p>
              Nasze biuro projektowe specjalizuje się w tworzeniu nowoczesnych i
              funkcjonalnych przestrzeni, które łączą estetykę z praktycznością.
              Z pasją podchodzimy do każdego projektu, dbając o każdy detal, aby
              sprostać oczekiwaniom naszych klientów. Projektujemy wnętrza
              prywatne oraz komercyjne, uwzględniając najnowsze trendy i
              indywidualne potrzeby użytkowników. Naszym celem jest kreowanie
              przestrzeni, które nie tylko cieszą oko, ale także podnoszą
              komfort życia i pracy. Zespół doświadczonych architektów i
              projektantów wnętrz pracuje z zaangażowaniem, aby każde zlecenie
              było unikalne i dopasowane do wizji klienta.
            </p>
          </div>
          <div className={styles['about__images']}>
            <img
              src={photo}
              srcSet={`${photoSm} 300w, ${photoMd} 768w`}
              sizes="100vw"
              className={styles['about__img']}
              alt="Aneks kuchenny w nowoczesnym stylu"
              loading="lazy"
            />
          </div>
        </div>

        <Section title=" ">
          <ListPros />
        </Section>

        <Section title="Co nas wyróżnia?" className={styles['stages-section']}>
          <div className={styles['stages-bg']}></div>
          <ListStages />
        </Section>

        <Section title="Zaufali nam" className={styles['clients-section']}>
          <ListTrust />
        </Section>
      </Container>
    </>
  );
};

export default Home;
