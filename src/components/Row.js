import React, { useEffect, useState } from "react";
import axios from "../helper/axios";

const Row = (props) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    let isCanceled = false;
    async function fetchingMovies(url) {
      await axios
        .get(url)
        .then((data) => {
          if (!isCanceled) {
            setMovies(data.data.results);
          }
        })
        .catch((err) => console.log(err));
    }
    fetchingMovies(props.urlFetcher);

    return () => {
      isCanceled = true;
    };
  }, []);

  // useEffect(() => {
  //   console.log(props.title);
  //   console.log(movies);
  // }, [movies]);

  if (movies && movies.length === 0) return <p>Loading ... </p>;

  return (
    <div className="row">
      <h3 className="header_secondary">{props.title}</h3>
      <div className="row_container">
        {movies.map((movie) => (
          <img
            src={`${baseUrl}${movie.backdrop_path}`}
            className={`row_poster ${props.isLargePoster && "row_largePoster"}`}
            key={movie.id}
            alt={movie.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
