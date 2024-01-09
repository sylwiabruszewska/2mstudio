import { useNavigate } from 'react-router-dom';

import { BiSolidCoffeeAlt } from 'react-icons/bi';
import { FaLightbulb } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa6';
import { FaHouse } from 'react-icons/fa6';

import styles from './ListStages.module.scss';
import { Button } from 'components';

export const ListStages = () => {
  const navigate = useNavigate();

  return (
    <div className={styles['stages-container']}>
      <ul className={styles['list']}>
        <li className={styles['list__item']}>
          <BiSolidCoffeeAlt className={styles['list__icon']} />
          <h3 className={styles['item__heading']}>Spotkanie</h3>
          <p className={styles['item__text']}>
            Spotykamy się na wstępną rozmowę odnośnie potrzeb i stylistyki, przy
            okazji wykonywana jest inwentaryzacja pomieszczeń.
          </p>
        </li>

        <li className={styles['list__item']}>
          <FaLightbulb className={styles['list__icon']} />
          <h3 className={styles['item__heading']}>Projektowanie</h3>
          <p className={styles['item__text']}>
            Podczas procesu projektowania starannie analizujemy Twoje potrzeby i
            preferencje, tworząc koncepcję idealnie dopasowaną do Twojego stylu
            życia i estetyki.
          </p>
        </li>

        <li className={styles['list__item']}>
          <FaBook className={styles['list__icon']} />
          <h3 className={styles['item__heading']}>Projekt wykonawczy</h3>
          <p className={styles['item__text']}>
            Projekt wykonawczy to etap, na którym skupiamy się na szczegółowym
            planowaniu i dokumentowaniu całego projektu.
          </p>
        </li>

        <li className={styles['list__item']}>
          <FaHouse className={styles['list__icon']} />
          <h3 className={styles['item__heading']}>Realizacja</h3>
          <p className={styles['item__text']}>
            W etapie realizacji przechodzimy od koncepcji do rzeczywistości.
            Nasz zespół wykwalifikowanych specjalistów nadzoruje każdy aspekt
            projektu.
          </p>
        </li>
      </ul>
      <Button type="button" onClick={() => navigate('/oferta')}>
        Poznaj szczegóły
      </Button>
    </div>
  );
};
