import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

import styles from './ContactForm.module.scss';
import { Button } from 'components';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);

  const siteKey = process.env.REACT_APP_RECAPTCHA_SITE_KEY;

  const handleRecaptchaChange = token => {
    setRecaptchaToken(token);
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await axios.post('/send_email.php', values);
      console.dir(res);
      setSubmitted(true);
      errorMessage(false);
      resetForm();
    } catch (error) {
      console.error(error);
      setErrorMessage(true);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-ząćęłńóśźż ]+$/, 'Imię może zawierać wyłącznie litery')
      .max(30, 'Imię może zawierać maksymalnie 30 znaków')
      .required('Imię jest wymagane'),
    email: Yup.string()
      .email('Niepoprawny format adresu email')
      .required('Adres email jest wymagany')
      .max(30, 'Adres email może zawierać maksymalnie 30 znaków'),
    phone: Yup.string()
      .matches(/^[0-9]*$/, 'Numer telefonu może zawierać wyłącznie cyfry')
      .max(20, 'Numer telefonu może zawierać maksymalnie 20 cyfr'),
    message: Yup.string()
      .matches(
        /^[A-Za-z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ .-]+$/,
        'Wiadomość może zawierać wyłącznie litery, cyfry i znaki.'
      )
      .min(50, 'Wiadomość musi zawierać co najmniej 50 znaków.')
      .max(500, 'Wiadomość może zawierać maksymalnie 500 znaków.')
      .required('Wiadomość jest wymagana.'),
    consent: Yup.boolean()
      .oneOf([true], 'Zgoda na przetwarzanie danych jest wymagana')
      .required('Zgoda na przetwarzanie danych jest wymagana'),
  });

  return (
    <>
      {!submitted ? (
        <>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phone: '',
              message: '',
              consent: false,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className={styles['form']}>
                <h3 className={styles['form-heading']}>Formularz kontaktowy</h3>
                <label>
                  Imię:
                  <Field
                    className={styles['form__input']}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Imię"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className={styles['error-message']}
                  />
                </label>

                <label>
                  Adres e-mail:
                  <Field
                    className={styles['form__input']}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Adres e-mail"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className={styles['error-message']}
                  />
                </label>

                <label>
                  Numer telefonu:
                  <Field
                    className={styles['form__input']}
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Numer telefonu"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className={styles['error-message']}
                  />
                </label>

                <label>
                  Wpisz wiadomość:
                  <Field
                    className={styles['form__textarea']}
                    as="textarea"
                    name="message"
                    id="message"
                    placeholder="Wpisz wiadomość"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className={styles['error-message']}
                  />
                </label>

                <label className={styles['checkbox-label']}>
                  <Field
                    type="checkbox"
                    name="consent"
                    className={styles['form__checkbox']}
                  />
                  <span className={styles['checkbox-text']}>
                    Zgadzam się na wykorzystanie moich danych osobowych przez
                    firmę 2M STUDIO Pracownia Projektowa w celu skontaktowania
                    się ze mną i udzielenia odpowiedzi na moje zapytanie.
                  </span>
                  <ErrorMessage
                    name="consent"
                    component="div"
                    className={styles['error-message']}
                  />
                </label>

                <ReCAPTCHA sitekey={siteKey} onChange={handleRecaptchaChange} />

                <Button
                  className={styles['button']}
                  type="submit"
                  disabled={isSubmitting || !recaptchaToken}
                >
                  Wyślij
                </Button>
              </Form>
            )}
          </Formik>
          {errorMessage && (
            <div>
              Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.
            </div>
          )}
        </>
      ) : (
        <>
          {submitted && (
            <div>Dziękujemy za wiadomość, skontaktujemy się z Państwem.</div>
          )}
        </>
      )}
    </>
  );
};
