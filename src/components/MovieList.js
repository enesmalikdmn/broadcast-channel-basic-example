import React from 'react';
// import { useNavigate } from 'react-router-dom';
import '../App.css';

const MovieList = (props) => {
  // const navigate = useNavigate();

  const showInfo = (movie) => {
    // navigate(`/movie-info/${movie.id}`);
    const bc = new BroadcastChannel('movie-info');
    bc.postMessage(movie);
  }

  return (
    <div className="movie-container">
      {props.movies?.map((movie) => (
        <div 
          className="movie-card" 
          key={movie.id}
          onClick={() => showInfo(movie)} // Click olayı ile showInfo fonksiyonunu çağırıyoruz
        >
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
