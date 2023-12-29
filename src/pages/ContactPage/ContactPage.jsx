import { Helmet } from 'react-helmet';

import styles from './ContactPage.module.scss';
import { Section, Container, ContactForm, Map, Address } from 'components';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Kontakt</title>
      </Helmet>

      <Section>
        <Container>
          <div className={styles['contact__container']}>
            <div className={styles['contact__box']}>
              <Address />
              <ContactForm className={styles['contact__form']} />
            </div>

            <div className={styles['contact__box']}>
              <Map />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
