import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';

import styles from './AboutUsPage.module.scss';
import { Section, Container, BackLink } from 'components';
import { getAboutUsInfo } from '../../services/api';
import { setIsLoading } from '../../redux/global/globalSlice';

const AboutUsPage = () => {
  const [data, setData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setIsLoading(true));
      try {
        const data = await getAboutUsInfo();
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

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
