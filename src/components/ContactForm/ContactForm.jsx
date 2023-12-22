import axios from 'axios';

import styles from './ContactForm.module.scss';
import { Button } from 'components';

export const ContactForm = () => {
  const onSubmit = async event => {
    event.preventDefault();
    const { name, email, phone, message } = event.target.elements;

    try {
      const res = await axios.post(
        '/mail',
        {
          name: name.value,
          email: email.value,
          phone: phone.value,
          message: message.value,
        },
        {
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
        }
      );

      console.dir(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={onSubmit} className={styles['form']}>
      <h3 className={styles['form-heading']}>Formularz kontaktowy</h3>
      <label>
        Imię:
        <input type="text" name="name" />
      </label>
      <label>
        Adres e-mail:
        <input type="email" name="email" />
      </label>
      <label>
        Numer telefonu:
        <input type="number" name="phone" />
      </label>
      <label>
        Wpisz wiadomość:
        <textarea name="message"></textarea>
      </label>
      <Button type="submit">Wyślij</Button>
    </form>
  );
};
