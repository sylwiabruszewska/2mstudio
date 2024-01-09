import { Helmet } from 'react-helmet';
import parse from 'html-react-parser';
import { useQuery } from 'react-query';

import styles from './AboutUsPage.module.scss';
import { Section, Container, BackLink, Loader } from 'components';
import { getAboutUsInfo } from '../../services/api';

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
        <Container>
          <img src="" className={styles['img']} alt="Nasz zespół" />
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
