import { Helmet } from 'react-helmet';

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Strony nie znaleziono</title>
      </Helmet>

      <p>404 - Ups! Strony nie znaleziono</p>
      <p>Strona, której szukasz nie istnieje.</p>
    </>
  );
};

export default NotFoundPage;
