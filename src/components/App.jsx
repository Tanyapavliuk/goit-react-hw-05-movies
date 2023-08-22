import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

import Movies from 'pages/Movie/Movie';
import Home from 'pages/Home/Home';
import SharedLayout from './SharedLayout/SharedLayout';

//----ліниве завантаження компонентів----//
const MovieDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const Actors = lazy(() => import('./Actors/Actors'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Error = lazy(() => import('./Error/Error'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies">
            <Route index element={<Movies />} />
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Actors />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Error>Not Found 404</Error>} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
