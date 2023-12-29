import { Helmet } from 'react-helmet';
import { Section, Container } from 'components';
import parse from 'html-react-parser';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getPost } from 'services/api';
import styles from './PostDetails.module.scss';
import { BackLink, AnimatedRoute } from 'components';

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPost(postId);
        setPost(data);
      } catch (error) {
        console.error('Error fetching post:', error);
      }
    };

    fetchData();
  }, [postId]);

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
