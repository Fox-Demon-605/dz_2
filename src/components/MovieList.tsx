import type { Movie } from "../types/Movie";
import MovieCard from "./MovieCard";

interface Props {
  movies: Movie[];
  onDelete: (id: number) => void;
  onToggleWatched: (id: number) => void;
}

function MovieList({ movies, onDelete, onToggleWatched }: Props) {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDelete={onDelete}
          onToggleWatched={onToggleWatched}
        />
      ))}
    </div>
  );
}

export default MovieList;