import { ProjectsPageTemplate } from 'components';
import { getPortoflioBuildingsResidential } from '../../services/api';

const BuildingsResidential = () => {
  return (
    <ProjectsPageTemplate
      pageTitle="Budynki mieszkalne"
      apiFunction={getPortoflioBuildingsResidential}
    />
  );
};

export default BuildingsResidential;
