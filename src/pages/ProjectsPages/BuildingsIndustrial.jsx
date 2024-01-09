import { ProjectsPageTemplate } from 'components';
import { getPortoflioBuildingsIndustrial } from '../../services/api';

const BuildingsIndustrial = () => {
  return (
    <ProjectsPageTemplate
      pageTitle="Budynki przemysłowe"
      apiFunction={getPortoflioBuildingsIndustrial}
    />
  );
};

export default BuildingsIndustrial;
