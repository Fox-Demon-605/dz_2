import type { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
}

function MovieList({movies}: Props) {

  return (
    <div>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie}/>
      ))}
    </div>
  );
}

export default MovieList;