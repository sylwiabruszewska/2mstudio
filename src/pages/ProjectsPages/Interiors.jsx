import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Projects.module.scss';
import { getImages } from '../../helpers/getImages';
import { getPortfolioInterior } from '../../services/api';
import { setIsLoading } from '../../redux/global/globalSlice';

const Interiors = () => {
  const [projects, setProjects] = useState();
  const [featuredImages, setFeaturedImages] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setIsLoading(true));
      try {
        const data = await getPortfolioInterior();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    getImages(projects, featuredImages, setFeaturedImages, getImages);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [projects]);

  return (
    <>
      <Helmet>
        <title>2m Studio Pracownia Projektowa - Budynki przemysłowe</title>
      </Helmet>

      <ul className={styles['gallery']}>
        {projects &&
          projects.map(post => (
            <li key={post.id} className={styles['photo-card']}>
              <Link to={`/${post.id}`}>
                {post.featured_media !== 0 &&
                  featuredImages[post.featured_media] && (
                    <div className={styles['img-container']}>
                      <img
                        className={styles['card__img']}
                        src={featuredImages[post.featured_media]}
                        alt={post.title.rendered}
                        loading="lazy"
                      />
                      <div className={styles['card__overlay']}>
                        <div className={styles['box']}>
                          <h3 className={styles['card__title']}>
                            {post.title.rendered}
                          </h3>
                        </div>
                      </div>
                    </div>
                  )}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Interiors;
