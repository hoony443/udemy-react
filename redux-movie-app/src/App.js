import Home from "./routes/Home";
import Detail from "./routes/Deatail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { updateMoviestore } from "./redux/MovieStore";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();
  const getMovies = async () => {
    const res = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const movie_data = await res.json();
    console.log(movie_data);
    setMovies(movie_data.data.movies);
    dispatch(
      updateMoviestore({ movies: movie_data.data.movies, isLoading: false })
    );
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          path="/movie/:movie_id"
          element={<Detail loading={loading} movies={movies} />}
        />
        <Route path="/" element={<Home loading={loading} movies={movies} />} />
      </Routes>
    </Router>
  );
}

export default App;
