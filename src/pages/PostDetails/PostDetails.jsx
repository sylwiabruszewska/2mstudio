import { Helmet } from 'react-helmet';
import { Section, Container } from 'components';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

import { getPost } from 'services/api';
import styles from './PostDetails.module.scss';
import { BackLink, AnimatedRoute, Loader } from 'components';

const PostDetails = () => {
  const { postId } = useParams();

  const {
    data: post,
    isLoading,
    isError,
  } = useQuery(`blogPost${postId}`, () => {
    const postData = getPost(postId);
    return postData;
  });

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <p>Wystąpił błąd, spróbuj odświeżyć stronę.</p>;
  }

  return (
    <>
      <Helmet>
        <title>2M STUDIO Pracownia Projektowa</title>
      </Helmet>

      <Section>
        <Container>
          {post && (
            <AnimatedRoute>
              <div className={styles['wp-post']}>
                <span>
                  {new Date(post.date).toLocaleDateString('pl-PL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <h2>{post.title.rendered}</h2>
                <hr />
                <div>{parse(post.content.rendered)}</div>
              </div>
              <BackLink />
            </AnimatedRoute>
          )}
        </Container>
      </Section>
    </>
  );
};

export default PostDetails;
