import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { SharedLayout } from './layout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const AboutUsPage = lazy(() => import('pages/AboutUsPage/AboutUsPage'));
const OfferPage = lazy(() => import('pages/OfferPage/OfferPage'));
const PortfolioPage = lazy(() => import('pages/PortfolioPage/PortfolioPage'));
const AllProjects = lazy(() => import('pages/ProjectsPages/AllProjects'));
const Interiors = lazy(() => import('pages/ProjectsPages/Interiors'));
const BuildingsResidential = lazy(() =>
  import('pages/ProjectsPages/BuildingsResidential')
);
const BuildingsIndustrial = lazy(() =>
  import('pages/ProjectsPages/BuildingsIndustrial')
);
const BuildingsCommercial = lazy(() =>
  import('pages/ProjectsPages/BuildingsCommercial')
);
const BlogPage = lazy(() => import('pages/BlogPage/BlogPage'));
const PostDetails = lazy(() => import('pages/PostDetails/PostDetails'));
const ContactPage = lazy(() => import('pages/ContactPage/ContactPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/* Strona główna */}
        <Route index element={<HomePage />} />

        {/* Pozostałe trasy */}
        <Route path="nasz-zespol" element={<AboutUsPage />} />
        <Route path="oferta" element={<OfferPage />} />

        <Route path="projekty/" element={<PortfolioPage />}>
          <Route path="wszystkie" element={<AllProjects />} />
          <Route path="wnetrza" element={<Interiors />} />
          <Route path="budynki-mieszkalne" element={<BuildingsResidential />} />
          <Route path="budynki-uslugowe" element={<BuildingsCommercial />} />
          <Route path="budynki-przemyslowe" element={<BuildingsIndustrial />} />
        </Route>

        <Route path="aktualnosci" element={<BlogPage />} />
        <Route path="/:postId" element={<PostDetails />} />

        <Route path="kontakt" element={<ContactPage />} />

        {/* Obsługa trasy "nieznalezionej" */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
