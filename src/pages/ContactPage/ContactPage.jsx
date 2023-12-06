import { Helmet } from 'react-helmet';

import styles from './ContactPage.module.scss';
import { Section, Container, Address } from 'components';
import photo from 'assets/images/interior1.jpg';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>2m Studio Pracownia Projektowa - Portfolio - Kontakt</title>
      </Helmet>

      <Section>
        <Container>
          <div className={styles['contact__container']}>
            <div className={styles['contact__box']}>
              <div>
                <p>W razie pytań skontaktuj się z nami!</p>
                <Address />
              </div>
            </div>

            <div className={styles['contact__box']}>
              <img
                className={styles['contact__img']}
                src={photo}
                alt={`Living room`}
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default ContactPage;
