import { useState } from "react";
import "./App.css";
import AddMovie from "./components/AddMovie/AddMovie";
import FilterMovie from "./components/Filter/FilterMovie";
import MovieList from "./components/movieList/MovieList";
import Navigation from "./components/Navigation/Navigation";
import { moviesData } from "./Data";
//I added few movies in the data just for more result while doing the filter
function App() {
  const [movies, setMovies] = useState(moviesData);
  const [newRate, setNewRate] = useState(0);

  const add = (newMovie) => setMovies([...movies, newMovie]);
  const [inputSearch, setInputSearch] = useState("");

  return (
    <div className="App">
      <Navigation />
      <FilterMovie
        inputSearch={inputSearch}
        setInputSearch={setInputSearch}
        newRate={newRate}
        setNewRate={setNewRate}
      />
      <AddMovie add={add} />
      <MovieList movies={movies} inputSearch={inputSearch} newRate={newRate} />
    </div>
  );
}

export default App;
