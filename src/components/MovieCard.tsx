import type { Movie } from "../types/Movie";

interface Props {
  movie: Movie;
  onDelete: (id: number) => void;
  onToggleWatched: (id: number) => void;
}

export function MovieCard({ movie, onDelete, onToggleWatched }: Props) {
  return (
    <div className="movie-card">
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <p>{movie.description}</p>
      
      <label>
        <input
          type="checkbox"
          checked={movie.watched}
          onChange={() => onToggleWatched(movie.id)}
        />
        Просмотрено
      </label>
      
      <button
        onClick={() => {
          if (window.confirm(`Удалить фильм "${movie.title}"?`)) {
            onDelete(movie.id);
          }
        }}
      >
        Удалить
      </button>
    </div>
  );
}

export default MovieCard;