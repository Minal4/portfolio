import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Portfolio } from './Portfolio/Portfolio';

export const HomePage = () => {
  return (
    <BrowserRouter>
      <Header />
      <Portfolio />
      <Routes>
        <Route path="portfolio" element={<Portfolio />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
