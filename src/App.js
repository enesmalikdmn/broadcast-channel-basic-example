import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { filmListService } from './services/filmList.service';
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfo'; // MovieInfo bileşenini import edin

function App() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await filmListService.getTop100Film();
      setMovieList(response);
    }
    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <header className='header'>
          <nav>
            <a href="/">Movie List</a>
            <a href="/movie-info">Movie Info</a>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<MovieList movies={movieList} />} />
          <Route path="/movie-info" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
