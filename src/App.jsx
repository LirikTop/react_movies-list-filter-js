/* eslint-disable function-paren-newline */
import { useState } from 'react';

import './App.scss';
import { MoviesList } from './components/MoviesList';
import moviesFromServer from './api/movies.json';

export const App = () => {
  function getFilteredMovies(movies, query) {
    let prepareMovies = movies;
    const normalizedQuery = query.trim().toLowerCase();

    if (normalizedQuery) {
      prepareMovies = prepareMovies.filter(
        movie =>
          movie.title.toLowerCase().includes(normalizedQuery) ||
          movie.description.toLowerCase().includes(normalizedQuery),
      );
    }

    return prepareMovies;
  }

  const [searchQuery, setSearchQuery] = useState('');
  const visibleMovies = getFilteredMovies(moviesFromServer, searchQuery);

  return (
    <div className="page">
      <div className="page-content">
        <div className="box">
          <div className="field">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="search-query" className="label">
              Search movie
            </label>

            <div className="control">
              <input
                onChange={e => setSearchQuery(e.target.value)}
                value={searchQuery}
                type="text"
                id="search-query"
                className="input"
                placeholder="Type search word"
              />
            </div>
          </div>
        </div>

        <MoviesList movies={visibleMovies} />
      </div>

      <div className="sidebar">Sidebar goes here</div>
    </div>
  );
};
