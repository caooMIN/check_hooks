import React from "react";
import MovieCard from "../movieCard/MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, inputSearch, newRate }) => {
  return (
    <div>
      {movies
        .filter(
          (movie) =>
            (newRate === 0 || movie.rate === newRate) &&
            movie.title.toUpperCase().includes(inputSearch.toUpperCase().trim())
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};
//more efficient way to filter by using && and || in a single  '.filter' function and a single 'map' function instead of 2
export default MovieList;
