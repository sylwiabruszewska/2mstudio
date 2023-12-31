import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './Projects.module.scss';
import { getImages } from '../../helpers/getImages';
import {
  getPortfolioInterior,
  getPortoflioBuildingsCommercial,
  getPortoflioBuildingsIndustrial,
  getPortoflioBuildingsResidential,
} from '../../services/api';
import { setIsLoading } from '../../redux/global/globalSlice';

const AllProjects = () => {
  const [projects, setProjects] = useState();
  const [featuredImages, setFeaturedImages] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(setIsLoading(true));
      try {
        const [
          InteriorProjects,
          commercialProjects,
          residentialProjects,
          industrialProjects,
        ] = await Promise.all([
          getPortfolioInterior(),
          getPortoflioBuildingsCommercial(),
          getPortoflioBuildingsResidential(),
          getPortoflioBuildingsIndustrial(),
        ]);

        const allProjects = [
          ...InteriorProjects,
          ...commercialProjects,
          ...residentialProjects,
          ...industrialProjects,
        ];

        setProjects(allProjects);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (projects && projects.length > 0) {
      getImages(projects, featuredImages, setFeaturedImages);
    }
  }, [projects, featuredImages]);

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Budynki usługowe</title>
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

export default AllProjects;
