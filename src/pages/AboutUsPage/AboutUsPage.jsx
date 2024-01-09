import { Helmet } from 'react-helmet';
import parse from 'html-react-parser';
import { useQuery } from 'react-query';

import styles from './AboutUsPage.module.scss';
import { Section, Container, BackLink, Loader } from 'components';
import { getAboutUsInfo } from '../../services/api';
import photo from '../../assets/images/staff.jpg';

const AboutUsPage = () => {
  const { data, isLoading, isError } = useQuery('aboutUsInfo', getAboutUsInfo);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Wystąpił błąd, spróbuj odświeżyć stronę.</p>;
  }

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - O nas</title>
      </Helmet>

      <Section>
        <Container className={styles['about__container']}>
          <img src={photo} className={styles['img']} alt="Nasz zespół" />
          <p className={styles['text']}>
            Naszą pracownię tworzą architekci: Marcin, Julia, Adam, Ewa i Tomek.
            Każda osoba w naszym zespole wnosi unikalne spojrzenie i
            umiejętności, dzięki którym możemy kreatywnie i indywidualnie
            podchodzić do naszych projektów
          </p>
          <div className={styles['wrapper']}>
            <div className={styles['content']}>{data && parse(data)}</div>
          </div>

          <BackLink />
        </Container>
      </Section>
    </>
  );
};

export default AboutUsPage;
