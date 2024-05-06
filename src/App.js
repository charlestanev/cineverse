import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import { useEffect, useState } from 'react';

const API_URL = "http://www.omdbapi.com?apikey=40b1c31a";

const movie1 = {
  "Title": "Amazing Spiderman Syndrome",
  "Year": "2012",
  "imdbID": "tt2586634",
  "Type": "movie",
  "Poster": "N/A"
}

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className='app'>
      <h1>Cineverce</h1>
      <div className='search'>
        <input
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img
          src={SearchIcon}
          alt="Search"
          // onChange={() => {}}
        />
      </div>
      <div className="container">
        <MovieCard movie1={movie1}

        />
      </div>

    </div>
  )
}

export default App;
