import React from "react";
import Row from "./Row";
import urlFetcher from "../helper/urlFetcher";
import Banner from "./Banner";
import Navbar from "./Navbar";

const Home = () => {
  const title = "NETFLIX CLONE";
  return (
    <>
      <Navbar />

      <div className="home">
        <Banner />
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
    </>
  );
};

export default Home;
