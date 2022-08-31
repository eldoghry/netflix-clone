import React, { useEffect, useState } from "react";
import axios from "../helper/axios";
import { getTrendingToday } from "../helper/fetcher";
import urlFetcher from "../helper/urlFetcher";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Banner = (props) => {
  const [movie, setMovie] = useState([]);
  const [ratingFill, setRatingFill] = useState(0);
  const [ratingOut, setRatingOut] = useState(0);

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
    const [decimal, reminder] = calcRating(movie.vote_average);
    setRatingFill(decimal);
    setRatingOut(reminder);
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

        <span className="banner__rating">
          {ratingFill &&
            [...Array(ratingFill)].map(() => {
              return <FaStar />;
            })}

          {ratingOut && <FaStarHalfAlt />}
        </span>
        <p className="banner_paragraph">{movie.overview}</p>
      </div>
    </div>
  );
};

export default Banner;

function calcRating(avgRating) {
  let rate = avgRating / 2;
  let reminder = rate % 2;
  let decimal = rate - reminder;

  console.log(avgRating, decimal, reminder);

  return [decimal, reminder > 0 ];
}
