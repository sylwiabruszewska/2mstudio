import { Helmet } from 'react-helmet';

// import styles from './OfferPage.module.scss';
import { Section, Container, BackLink } from 'components';

const OfferPage = () => {
  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Oferta</title>
      </Helmet>

      <Section>
        <Container>
          <div>Oferta</div>
          <BackLink />
        </Container>
      </Section>
    </>
  );
};

export default OfferPage;
