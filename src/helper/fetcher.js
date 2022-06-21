import axios from "./axios";
import urlFetcher from "./fetcher";

export const getTrending = async () => {
  const res = axios
    .get(urlFetcher.trending)
    .then((data) => data.data)
    .catch((err) => err);
};
