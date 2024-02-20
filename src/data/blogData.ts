import { IGalleryItem } from '../components/GalleryList/Gallery.types';
import blog1 from './../images/blog/blog-1.png';
import blog2 from './../images/blog/blog-2.png';

export const blogData: IGalleryItem[] = [
  {
    id: 1,
    title: 'Top 10 song for running',
    img: blog1,
    category: 'lifestyle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 2,
    title: 'Cold winter days',
    img: blog2,
    category: 'lifestyle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
];
