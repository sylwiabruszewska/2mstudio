import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './BlogPage.module.scss';
import { Section, Container, Button, AnimatedRoute } from 'components';
import { getImages } from '../../helpers/getImages';
import { getBlogPosts } from '../../services/api';

const BlogPage = () => {
  const [posts, setPosts] = useState();
  const [featuredImages, setFeaturedImages] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPageBlog, setLastPageBlog] = useState(null);
  const location = useLocation();
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const page = parseInt(queryParams.get('page') || '1');
    setCurrentPage(page);
  }, [location]);

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    updateURL(nextPage);
  };

  const goToPrevPage = () => {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);
    updateURL(prevPage);
  };

  const updateURL = page => {
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', page);
    const newURL = `${location.pathname}?${queryParams.toString()}`;
    window.history.pushState({}, '', newURL);
  };

  const fetchData = async () => {
    try {
      const { posts, lastPage } = await getBlogPosts(currentPage);

      setPosts(posts);

      if (lastPageBlog === null) {
        setLastPageBlog(lastPage);
      }
      setDataLoaded(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    if (posts && posts.length > 0) {
      getImages(posts, featuredImages, setFeaturedImages);
    }
  }, [posts, featuredImages]);

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa - Portfolio - Blog</title>
      </Helmet>

      <Section>
        <Container>
          {dataLoaded && (
            <AnimatedRoute>
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
                          <h2 className={styles['blog-title']}>
                            {post.title.rendered}
                          </h2>
                          <p
                            className="blog-excerpt"
                            dangerouslySetInnerHTML={{
                              __html: post.excerpt.rendered,
                            }}
                          />
                        </Link>
                      </div>
                      <div className={styles['overlay']}>
                        <Link to={`/${post.id}`}>
                          {post.featured_media !== 0 &&
                            featuredImages[post.featured_media] && (
                              <div>
                                <img
                                  src={featuredImages[post.featured_media]}
                                  alt={post.title.rendered}
                                  className={styles['post-img']}
                                />

                                <div className={styles['box']}>zobacz post</div>
                              </div>
                            )}
                        </Link>
                      </div>
                    </article>
                  ))}
              </div>
              <div className={styles['btn-group']}>
                <div>
                  {posts && currentPage > 1 && (
                    <Button
                      className={styles['btn-pag']}
                      onClick={goToPrevPage}
                    >
                      Poprzednia strona
                    </Button>
                  )}
                </div>
                <div>
                  {currentPage < lastPageBlog && posts && (
                    <Button
                      className={styles['btn-pag']}
                      onClick={goToNextPage}
                    >
                      Następna strona
                    </Button>
                  )}
                </div>
              </div>
            </AnimatedRoute>
          )}
        </Container>
      </Section>
    </>
  );
};

export default BlogPage;
