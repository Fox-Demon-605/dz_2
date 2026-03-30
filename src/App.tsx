import { useState } from 'react';
import './App.css'
import { movies } from "./data/movies";
import MovieCard from "./components/MovieCard";
import MovieList from "./components/MovieList";
import {MovieForm} from "./components/MovieForm";



function App() {
  
  const [movieList, setMovieList] = useState(movies);

  // const [show, setShow] = useState(true);
  // if (show) {
  //   const [count, setCount] = useState(0);
  // }

  // const hClear = () => {
  //   movieList.length = 0;
  // }

  // const hClear = () => {
  //   setMovieList([]);
  // }

  return (
    <div>
      <button onClick={() => setMovieList([])}>Кнопка очистки</button>
      <p>Всего фильмов: {movieList.length}</p>
      <MovieForm onAdd={(movie => setMovieList([...movies, movie]))} />
      <MovieList movies={movieList}/>
      {movieList.length == 0 && <p>Список пуст!</p>}
    </div>
  );
}

export default App;