import React from "react";
import Row from "./Row";
import urlFetcher from "../helper/urlFetcher";

const Home = () => {
  const title = "NETFLIX CLONE";
  return (
    <div className="home">
      <h1>NAV</h1>
      <h1>Banner</h1>
      <Row
        urlFetcher={urlFetcher.trending}
        title={"Trending Now"}
        isLargePoster={true}
      />
      <Row
        urlFetcher={urlFetcher.top_rated}
        title={"Top Rated"}
        isLargePoster={false}
      />
      <Row
        urlFetcher={urlFetcher.popular}
        title={"Most Popular"}
        isLargePoster={false}
      />
    </div>
  );
};

export default Home;
