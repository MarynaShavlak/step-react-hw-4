import React, { FC } from 'react';
import './ShowBtn.css';
import { IShowBtn } from './ShowBtn.types';

export const ShowBtn: FC<IShowBtn> = ({ onBtnClick, type }) => {
  return (
    <button type="button" className="load-more-btn" onClick={onBtnClick}>
      {type}
    </button>
  );
};
