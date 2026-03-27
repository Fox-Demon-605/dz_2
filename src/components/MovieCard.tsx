import type { Movie } from "../types/Movie";

interface Props {
  movie: Movie;
}

function MovieCard({movie}: Props) {

  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.year}</p>
      <p>{movie.description}</p>
    </div>
  );
}

export default MovieCard;