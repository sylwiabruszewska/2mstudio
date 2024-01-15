import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useQuery } from 'react-query';

import styles from './BlogPage.module.scss';
import { Section, Container, Button, Loader } from 'components';
import { getBlogPosts } from '../../services/api';

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get('page') || '1');
    setCurrentPage(page);
  }, [location]);

  const { data, isLoading, isError } = useQuery(
    ['blogPosts', currentPage],
    () => getBlogPosts(currentPage)
  );

  const posts = data?.posts;
  const lastPage = data?.lastPage;

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Wystąpił błąd, spróbuj odświeżyć stronę.</p>;
  }

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    ScrollToTop();
    updateURL(nextPage);
  };

  const goToPrevPage = event => {
    event.preventDefault();
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    updateURL(prevPage);
  };

  const updateURL = page => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', page);
    const newURL = `${process.env.PUBLIC_URL}${
      location.pathname
    }?${queryParams.toString()}`;
    window.history.pushState({}, '', newURL);
  };

  const ScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Portfolio - Blog</title>
      </Helmet>

      <Section>
        <Container>
          <div className={styles['blog-list']}>
            {posts &&
              posts.map(post => (
                <article key={post.id} className={styles['blog-card']}>
                  <div className={styles['blog-post']}>
                    <Link to={`/${post.id}`}>
                      <p className={styles['blog-date']}>
                        {new Date(post.date).toLocaleDateString('pl-PL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                      <h2 className={styles['blog-title']}>{post.title}</h2>
                      <p
                        className="blog-excerpt"
                        dangerouslySetInnerHTML={{
                          __html: post.excerpt,
                        }}
                      />
                    </Link>
                  </div>
                  <div className={styles['overlay']}>
                    <Link to={`/${post.id}`}>
                      <div>
                        <img
                          src={post.img}
                          alt={post.title}
                          className={styles['post-img']}
                        />

                        <div className={styles['box']}>zobacz post</div>
                      </div>
                    </Link>
                  </div>
                </article>
              ))}
          </div>
          <div className={styles['btn-group']}>
            <div>
              {posts && currentPage > 1 && (
                <Button className={styles['btn-pag']} onClick={goToPrevPage}>
                  Poprzednia strona
                </Button>
              )}
            </div>
            <div>
              {currentPage < lastPage && posts && (
                <Button className={styles['btn-pag']} onClick={goToNextPage}>
                  Następna strona
                </Button>
              )}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default BlogPage;
