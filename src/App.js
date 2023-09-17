import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';


const API_URL = 'http://omdbapi.com?apikey=b8c4613b';


const App = () => {

  const [movies, setMovies] = useState([])

  const[searchTerm,setserachTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovies(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="app ">
      <h1>Movie Land</h1>

      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={searchTerm}
          onChange={(e) =>setserachTerm(e.target.value)} />

        <img
          alt="search"
          onClick={() => searchMovies(searchTerm)} />
      </div>

      {
        movies?.length > 0
          ? (
            <div className="container">
              {movies.map((movie) => (
                <MovieCard movie={movie} />
              ))}
            </div>
          ) : (
            <div className='empty'>
              <h2>Type to search movies</h2>
            </div>
          )
      }



    </div>

  );
}

export default App;
