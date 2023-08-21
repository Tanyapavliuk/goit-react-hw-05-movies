import { Route, Routes } from 'react-router-dom';

import Movies from 'pages/Movie/Movie';
import Home from 'pages/Home/Home';

import SharedLayout from './SharedLayout/SharedLayout';
import MovieDetails from './MovieDetails/MovieDetails';
import Actors from './Actors/Actors';
import Reviews from './Reviews/Reviews';

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
          </Route>
        </Route>
      </Routes>
    </>
  );
};
