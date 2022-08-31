const API_KEY = "d31334a1aeb6ba21339828a3ab67d64f";

export default {
  trending: `trending/all/week?api_key=${API_KEY}`,
  trending_today: `trending/all/day?api_key=${API_KEY}`,
  popular: `movie/popular?api_key=${API_KEY}`,
  top_rated: `movie/top_rated?api_key=${API_KEY}`,
};
