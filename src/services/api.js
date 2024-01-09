import axios from 'axios';
import { BASE_URL, API_PATHS } from '../config.js';

import defaultImage from '../assets/images/photo-home.jpg';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// fetch data
export const fetchData = async path => {
  try {
    const response = await instance.get(`${BASE_URL}${path}`, {
      headers: {
        accept: 'application/json',
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('An error occurred while fetching data:', error);
    throw error;
  }
};

// fetch projects with images
export const fetchProjectsWithImages = async path => {
  const projects = await fetchData(path);

  const projectsWithImages = await Promise.all(
    projects.map(async project => {
      let simplifiedProject = {
        id: project.id,
        img: defaultImage,
        title: project.title.rendered,
      };

      if (project.featured_media) {
        try {
          const featuredMedia = await fetchImages(project.featured_media);
          simplifiedProject.img = featuredMedia.source_url || defaultImage;
        } catch (error) {
          console.error(
            'There was a problem fetching images for project:',
            error
          );
        }
      }

      return simplifiedProject;
    })
  );

  return projectsWithImages;
};

// fetch projects for different categories
export const getPortfolioInterior = async () => {
  const projects = await fetchProjectsWithImages(API_PATHS.portfolioInterior);
  return projects;
};

export const getPortoflioBuildingsResidential = async () => {
  const projects = await fetchProjectsWithImages(
    API_PATHS.portoflioBuildingsResidential
  );
  return projects;
};

export const getPortoflioBuildingsIndustrial = async () => {
  const projects = await fetchProjectsWithImages(
    API_PATHS.portoflioBuildingsIndustrial
  );
  return projects;
};

export const getPortoflioBuildingsCommercial = async () => {
  const projects = await fetchProjectsWithImages(
    API_PATHS.portoflioBuildingsCommercial
  );
  return projects;
};

// fetch blog posts
export const getBlogPosts = async (page, perPage = 6) => {
  const apiUrl = `${API_PATHS.blog}&page=${page}&per_page=${perPage}`;

  const response = await instance.get(apiUrl, {
    headers: {
      accept: 'application/json',
    },
  });

  if (response.status === 200) {
    const totalPostsHeader = response.headers['x-wp-total'];
    const posts = response.data;
    const lastPage = Math.ceil(parseInt(totalPostsHeader) / perPage);

    const postsWithImages = await Promise.all(
      posts.map(async post => {
        let simplifiedPost = {
          id: post.id,
          img: defaultImage,
          title: post.title.rendered,
          date: post.date,
          excerpt: post.excerpt.rendered,
        };

        if (post.featured_media) {
          try {
            const featuredMedia = await fetchImages(post.featured_media);
            simplifiedPost.img = featuredMedia.source_url || defaultImage;
          } catch (error) {
            console.error(
              'There was a problem fetching images for posts:',
              error
            );
          }
        }

        return simplifiedPost;
      })
    );

    return { posts: postsWithImages, lastPage };
  } else {
    throw new Error('Network response was not ok');
  }
};

export const getPost = async postId => {
  const post = await fetchData(`${API_PATHS.post}/${postId}`);
  return post;
};

// fetch data for a subpage - About Us
export const getAboutUsInfo = async () => {
  const data = await fetchData(API_PATHS.aboutUs);
  if (data && data.content && data.content.rendered) {
    return data.content.rendered;
  } else {
    throw new Error('Nie można pobrać zawartości strony O nas.');
  }
};

// fetch images for projects, blog posts
export const fetchImages = async mediaId => {
  try {
    const response = await instance.get(`${API_PATHS.media}${mediaId}`);

    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }

    const images = response.data;
    return images;
  } catch (error) {
    console.error('There was a problem fetching the media:', error);
    throw error;
  }
};
