import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

import styles from './HomePage.module.scss';
import {
  Container,
  Section,
  ListPros,
  SliderPortfolio,
  ListStages,
  Button,
  ListTrust,
} from 'components';
import photo from 'assets/images/photo-home.jpg';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa</title>
      </Helmet>

      <Container type="full">
        <div className={styles['hero']}></div>
      </Container>

      <Container className={styles['about__container']}>
        <div className={styles['about']}>
          <div className={styles['about__text']}>
            <h1 className={styles['about__heading']}>
              2M STUDIO Pracownia Projektowa
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque non urna eleifend, interdum tellus luctus, molestie
              neque. Nam tincidunt nunc odio, ac ullamcorper elit pretium nec.
              Sed mollis, eros at lobortis blandit, elit arcu tempus lectus, at
              posuere turpis massa in lacus. Integer turpis mauris, finibus
              fermentum elementum porttitor, sagittis non ligula. Nulla
              facilisi. Duis neque mauris, consectetur at mi et, porta euismod
              quam. In id tellus vestibulum nisi pharetra dapibus sed in augue.
              Orci varius natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Sed suscipit tellus mi, vitae facilisis
              nulla placerat eu. Nullam snon dignissim lectus, et eleifend arcu.
              In lacinia lacinia magna. Mauris ac vulputate erat. Mauris vitae
              dui vestibulum, semper ex in, luctus sem. Sed orci leo, fringilla
              sit amet ultrices id, aliquam nec ipsum. Vivamus fermentum dui
              lobortis aliquet vestibulum.
            </p>
          </div>
          <div className={styles['about__images']}>
            <img className={styles['about__img']} src={photo} alt="" />
          </div>
        </div>
      </Container>

      <Section title=" ">
        <Container>
          <ListPros />
        </Container>
      </Section>

      <Section title="Portfolio">
        <Container type="full">
          <SliderPortfolio />
        </Container>
      </Section>

      <Section
        title="Jak powstaje projekt?"
        className={styles['stages-section']}
      >
        <div className={styles['stages-bg']}></div>
        <Container className={styles['center']}>
          <ListStages />

          <Button
            type="button"
            className={styles.center}
            onClick={() => navigate('/kontakt')}
          >
            Skontaktuj się z nami
          </Button>
        </Container>
      </Section>

      <Section title="Zaufali nam" className={styles['clients-section']}>
        <ListTrust />
      </Section>
    </>
  );
};

export default Home;
