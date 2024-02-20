import React, { FC } from 'react';
import './LoadMoreBtn.css';
import { ILoadMoreBtn } from './LoadMoreBtn.types';

export const LoadMoreBtn: FC<ILoadMoreBtn> = ({ onBtnClick }) => {
  return (
    <button type="button" className="load-more-btn" onClick={onBtnClick}>
      Load more
    </button>
  );
};
