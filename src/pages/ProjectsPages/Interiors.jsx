import { ProjectsPageTemplate } from 'components';
import { getPortfolioInterior } from '../../services/api';

const Interiors = () => {
  return (
    <ProjectsPageTemplate
      pageTitle="Wnętrza"
      apiFunction={getPortfolioInterior}
    />
  );
};

export default Interiors;
