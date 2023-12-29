import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';

import styles from './AboutUsPage.module.scss';
import { Section, Container, BackLink } from 'components';
import { getAboutUsInfo } from '../../services/api';

const AboutUsPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAboutUsInfo();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - O nas</title>
      </Helmet>

      <Section>
        <Container>
          <img src="" className={styles['img']} alt="Nasz zespół" />
          <div className={styles['wrapper']}>
            <div className={styles['content']}>
              {data && parse(data.content.rendered)}
            </div>
          </div>

          <BackLink />
        </Container>
      </Section>
    </>
  );
};

export default AboutUsPage;
