import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useQuery } from 'react-query';

import styles from './Projects.module.scss';
import { Loader } from 'components';
import { getPortfolioInterior } from '../../services/api';

const Interiors = () => {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery('portfolioInterior', getPortfolioInterior);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Wystąpił błąd, spróbuj odświeżyć stronę.</p>;
  }

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Budynki przemysłowe</title>
      </Helmet>

      <ul className={styles['gallery']}>
        {projects &&
          projects.map(project => (
            <li key={project.id} className={styles['photo-card']}>
              <Link to={`/${project.id}`}>
                <div className={styles['img-container']}>
                  <img
                    className={styles['card__img']}
                    src={project.featured_media}
                    alt={project.title.rendered}
                    loading="lazy"
                  />
                  <div className={styles['card__overlay']}>
                    <div className={styles['box']}>
                      <h3 className={styles['card__title']}>
                        {project.title.rendered}
                      </h3>
                    </div>
                  </div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Interiors;
