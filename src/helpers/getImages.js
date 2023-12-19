import { fetchImages } from '../services/api';
import defaultImage from '../assets/images/photo-home.jpg';

export const getImages = async (posts, imgState, setImgState) => {
  try {
    for (const post of posts) {
      if (post.featured_media !== null && !imgState[post.featured_media]) {
        try {
          const mediaData = await fetchImages(post.featured_media);
          setImgState(prevState => ({
            ...prevState,
            [post.featured_media]: mediaData.source_url || defaultImage,
          }));
        } catch (error) {
          console.error(
            'There was a problem fetching media for post:',
            post.id,
            error
          );
          setImgState(prevState => ({
            ...prevState,
            [post.featured_media]: defaultImage,
          }));
        }
      }
    }
  } catch (error) {
    console.error('There was a problem updating images state:', error);
  }
};
