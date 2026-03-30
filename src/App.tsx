import { useState } from 'react';
import './App.css'
import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import {MovieForm} from "./components/MovieForm";

function App() {
  const [movieList, setMovieList] = useState(movies);

  function deleteMovie(id: number) {
    setMovieList(movieList.filter(movie => movie.id !== id));
  }

  function handleToggleWatched(id: number) {
    setMovieList(
      movieList.map(movie =>
        movie.id === id ? { ...movie, watched: !movie.watched } : movie
      )
    );
  }

  return (
    <>
      <button onClick={() => setMovieList([])}>Кнопка очистки</button>
      <div className="counter">Всего фильмов: {movieList.length}</div>
      <MovieForm onAdd={(movie) => setMovieList([...movieList, movie])} />
      <MovieList
        movies={movieList}
        onDelete={deleteMovie}
        onToggleWatched={handleToggleWatched}
      />
      {movieList.length === 0 && <div>Список пуст!</div>}
    </>
  );
}

export default App;