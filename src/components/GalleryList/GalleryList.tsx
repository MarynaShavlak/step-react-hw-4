import React, { FC } from 'react';
import './GalleryList.css';
import { IGalleryItem, IGalleryList } from './Gallery.types';

const GalleryItem: FC<IGalleryItem> = ({
  img,
  category,
  title,
  description,
}) => (
  <li className="card">
    <a href="./project-page.html">
      <img src={img} alt="card img" className="card__img" />
      <p className="card__category">{category}</p>
      <h3 className="card__title">{title}</h3>
      <p className="card__description">{description}</p>
    </a>
  </li>
);

export const GalleryList: FC<IGalleryList> = ({ data }) => {
  return (
    <ul className="projects">
      {data.map(card => (
        <GalleryItem key={card.id} {...card} />
      ))}
    </ul>
  );
};
