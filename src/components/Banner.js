import React, { useEffect, useState } from "react";
import axios from "../helper/axios";
import { getTrendingToday } from "../helper/fetcher";
import urlFetcher from "../helper/urlFetcher";

const Banner = (props) => {
  const [movie, setMovie] = useState([]);
  const baseUrl = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function getTrendingToday() {
      await axios.get(urlFetcher.trending_today).then((data) => {
        //pick random movie
        const random = Math.trunc(Math.random() * data.data.results.length) + 1;
        setMovie(data.data.results[random]);
      });
    }

    getTrendingToday();
  }, []);

  useEffect(() => {
    console.log(movie);
  }, [movie]);

  return (
    <div
      className="banner"
      id="banner"
      style={{ backgroundImage: `url(${baseUrl}${movie.backdrop_path})` }}
    >
      <div className="banner_body">
        <h1 className="header_primary">
          {movie.original_name || movie.original_title || movie.title}
        </h1>
        <p className="banner_paragraph">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;
