import React, { useState } from 'react';
import './BlogSection.css';
import { GalleryList } from '../../components/GalleryList';
import { ShowBtn } from '../Buttons/ShowBtn';
import { blogData } from '../../data';

export const BlogSection = () => {
  const [visibleItemCount, setVisibleItemCount] = useState(2);
  const onLoadMore = () => {
    setVisibleItemCount(prevCount => prevCount + 2);
  };
  const onShowLess = () => {
    setVisibleItemCount(prevCount => prevCount - 2);
  };
  const itemsToShow = blogData.slice(0, visibleItemCount);
  return (
    <section className="section--blog">
      <div className="container">
        <GalleryList data={itemsToShow} />
        <div className="btn-list">
          {visibleItemCount < blogData.length && (
            <ShowBtn onBtnClick={onLoadMore} type="Load more" />
          )}
          {visibleItemCount > 2 && (
            <ShowBtn onBtnClick={onShowLess} type="Show less" />
          )}
        </div>
      </div>
    </section>
  );
};
