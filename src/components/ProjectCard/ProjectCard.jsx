import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ProjectCard.module.scss';

export const ProjectCard = ({ project }) => {
  return (
    <li key={project.id} className={styles['project-card']}>
      <Link to={`/${project.id}`}>
        <div className={styles['project-card__container']}>
          <img
            className={styles['project-card__img']}
            src={project.img}
            alt={project.title}
            loading="lazy"
          />
          <div className={styles['project-card__overlay']}>
            <div className={styles['project-card__box']}>
              <h3 className={styles['project-card__title']}>{project.title}</h3>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};
