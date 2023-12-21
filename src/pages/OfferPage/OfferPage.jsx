import { Helmet } from 'react-helmet';

// import styles from './OfferPage.module.scss';
import { Section, Container } from 'components';

const OfferPage = () => {
  return (
    <>
      <Helmet>
        <title>2m Studio Pracownia Projektowa - Oferta</title>
      </Helmet>

      <Section>
        <Container>Oferta</Container>
      </Section>
    </>
  );
};

export default OfferPage;
