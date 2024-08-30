
import React, { useEffect, useState } from 'react';
import './App.css';
import { filmListService } from './services/filmList.service';
import MovieList from './components/MovieList'

function App() {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    // to avoid from racing condition, we need to wait for the data to be fetched
    async function fetchData() {
      const response = await filmListService.getTop100Film();
      setMovieList(response);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <MovieList movies={movieList} />
    </div>
  );
}

export default App;
