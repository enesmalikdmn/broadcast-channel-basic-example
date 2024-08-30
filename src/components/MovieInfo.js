// App.js

import React, { useState } from 'react';
import '../App.css';

const MovieInfo = (props) => {
// broadcast channel ile mesajı alıp, movieId'yi state'e atayın
    const [movie, setMovie] = useState(null);
    const bc = new BroadcastChannel('movie-info');
    bc.onmessage = (event) => {
        console.log(event.data);
        setMovie(event.data);
    }

  return (
    <div className="movie-info">
        {movie && (
             <div className="movie-info-container">
             <div className="movie-info-header">
               <img src={movie.big_image} alt={movie.title} className="movie-info-image" />
               <div className="movie-info-details">
                 <h1>{movie.title} ({movie.year})</h1>
                 <div className="movie-info-rating">Rating: {movie.rating}</div>
                 <div className="movie-info-genre">
                   Genre: {movie.genre.join(', ')}
                 </div>
                 <p>{movie.description}</p>
                 <a href={movie.imdb_link} target="_blank" rel="noopener noreferrer" className="movie-info-link">
                   More Info on IMDb
                 </a>
               </div>
             </div>
           </div>
        )}
    </div>
  );
};

export default MovieInfo;
