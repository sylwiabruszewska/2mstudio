import { ProjectsPageTemplate } from 'components';
import {
  getPortfolioInterior,
  getPortoflioBuildingsCommercial,
  getPortoflioBuildingsIndustrial,
  getPortoflioBuildingsResidential,
} from '../../services/api';

const AllProjects = () => {
  return (
    <ProjectsPageTemplate
      pageTitle="Wszystkie projekty"
      apiFunction={async () => {
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

        return allProjects;
      }}
    />
  );
};

export default AllProjects;
