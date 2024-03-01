import { Helmet } from 'react-helmet';
import parse from 'html-react-parser';
import { useQuery } from 'react-query';

import styles from './PrivacyPolicyPage.module.scss';
import { Section, Container, BackLink, Loader } from 'components';
import { getPrivacyData } from '../../services/api';

const PrivacyPolicyPage = () => {
  const { data, isLoading, isError } = useQuery('offerData', getPrivacyData);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Wystąpił błąd, spróbuj odświeżyć stronę.</p>;
  }

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Oferta</title>
      </Helmet>

      <Section>
        <Container>
          <div className={styles['wrapper']}>
            <div className={styles['content']}>{data && parse(data)}</div>
          </div>

          <BackLink />
        </Container>
      </Section>
    </>
  );
};

export default PrivacyPolicyPage;
