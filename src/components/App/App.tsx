import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../../styles/main.css';
import './App.css';
import { Lifestyle } from '../../pages/Lifestyle';
import { Travel } from '../../pages/Travel';
import { Music } from '../../pages/Music';
import { Photodiary } from '../../pages/Photodiary';
import { SharedLayout } from '../SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Lifestyle />} />
        <Route path="/music" element={<Music />} />
        <Route path="/photodiary" element={<Photodiary />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="*" element={<Lifestyle />} />
      </Route>
    </Routes>
  );
};
