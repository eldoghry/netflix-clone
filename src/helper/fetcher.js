import axios from "./axios";
import urlFetcher from "./urlFetcher";

export const getTrending = async () => {
  const res = axios
    .get(urlFetcher.trending)
    .then((data) => data.data)
    .catch((err) => err);
};

export const getTrendingToday = async () => {
  const res = axios
    .get(urlFetcher.trending_today)
    .then((data) => data.data)
    .catch((err) => err);

  return res;
};
