import './App.css';
import MovieCard from './MovieCard';
import SearchIcon from './search.svg';
import { useEffect, useState } from 'react';

const API_URL = "https://www.omdbapi.com?apikey=40b1c31a";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    if (!title) return;
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search || []);
  }

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchMovies(searchTerm);
    }
  }

  return (
    <div className='app'>
      <h1>Cineverce</h1>
      <div className='search'>
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <img
          src={SearchIcon}
          alt="Search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {
        movies?.length > 0
          ? (
            <>
              <div className="container">
                {movies.map((movie) => (
                  <MovieCard key={movie.imdbID} movie={movie} />
                ))}
              </div>
            </>
          ) : (
            <div className='empty'>
              <h2>No Movies Found</h2>
            </div>
          )
      }
    </div>
  )
}

export default App;
