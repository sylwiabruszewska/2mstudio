import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import styles from './ContactForm.module.scss';
import { Button } from 'components';

export const ContactForm = () => {
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await axios.post('/send_email.php', values);
      console.dir(res);
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z ]+$/, 'Imię może zawierać wyłącznie litery')
      .required('Imię jest wymagane'),
    email: Yup.string()
      .email('Niepoprawny format adresu email')
      .required('Adres email jest wymagany'),
    phone: Yup.string().matches(
      /^[0-9]*$/,
      'Numer telefonu może zawierać wyłącznie cyfry'
    ),
    message: Yup.string()
      .matches(
        /^[A-Za-z0-9ąćęłńóśźżĄĆĘŁŃÓŚŹŻ .-]+$/,
        'Wiadomość może zawierać wyłącznie litery, cyfry i znaki.'
      )
      .min(50, 'Wiadomość musi zawierać co najmniej 50 znaków.')
      .required('Wiadomość jest wymagana.'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        message: '',
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

          <Button
            className={styles['button']}
            type="submit"
            disabled={isSubmitting}
          >
            Wyślij
          </Button>
        </Form>
      )}
    </Formik>
  );
};
