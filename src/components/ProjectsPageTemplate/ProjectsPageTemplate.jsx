import { Helmet } from 'react-helmet';
import { useQuery } from 'react-query';
import PropTypes from 'prop-types';

import styles from './ProjectsPageTemplate.module.scss';
import { Loader, ProjectCard } from 'components';

export const ProjectsPageTemplate = ({ pageTitle, apiFunction }) => {
  const {
    data: projects,
    isLoading,
    isError,
  } = useQuery(pageTitle, apiFunction);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Wystąpił błąd, spróbuj odświeżyć stronę.</p>;
  }

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - {pageTitle}</title>
      </Helmet>

      <ul className={styles['gallery']}>
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ul>
    </>
  );
};

ProjectsPageTemplate.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  apiFunction: PropTypes.func.isRequired,
};
