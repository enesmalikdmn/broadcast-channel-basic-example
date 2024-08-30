// App.js

import React, { useState } from 'react';
import '../App.css';

const MovieList = (props) => {


  const showInfo = (e) => {
    const bc = new BroadcastChannel('movie-info');
    bc.postMessage(e);
  }

  return (
    <div className="movie-container">
      {props.movies?.map((movie) => (
        <div className="movie-card" onClick={() => showInfo(movie)} key={movie.id}>
          <img src={movie.thumbnail} alt={movie.title} className="movie-thumbnail" />
          <div className="movie-info">
            <div className="movie-title">{movie.title}</div>
            <div className="movie-year">{movie.year}</div>
            <div className="movie-rating">Rating: {movie.rating}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
