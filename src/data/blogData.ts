import { IGalleryItem } from '../components/GalleryList/Gallery.types';
import blog1 from './../images/blog/blog-1.png';
import blog2 from './../images/blog/blog-2.png';
import gallery1 from './../images/gallery/gallery-1.png';
import gallery2 from './../images/gallery/gallery-2.png';
import gallery3 from './../images/gallery/gallery-3.png';
import gallery4 from './../images/gallery/gallery-4.png';

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
  {
    id: 3,
    title: 'American dream',
    img: gallery3,
    category: 'photodiary',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 4,
    title: 'A day exploring the Alps',
    img: gallery4,
    category: 'photodiary',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 5,
    title: 'More than just a music festival',
    img: gallery1,
    category: 'lifestyle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 6,
    title: 'Life tastes better with coffee',
    img: gallery2,
    category: 'lifestyle',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
];
