import { ProjectsPageTemplate } from 'components';
import { getPortoflioBuildingsCommercial } from '../../services/api';

const BuildingsCommercial = () => {
  return (
    <ProjectsPageTemplate
      pageTitle="Budynki usługowe"
      apiFunction={getPortoflioBuildingsCommercial}
    />
  );
};

export default BuildingsCommercial;
