import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.interceptors.request.use(request => {
	request.params = request.params || {};
	request.params['api_key'] = '66c7d7924e5f50bb2a8191fccc5d9fde';
	return request;
});

export const fetchTrading = () => {
	return axios.get('/trending/movie/week').then(res => res.data.results);
};

export const fetchMovieDetail = movieId => {
	return axios.get(`/movie/${movieId}`).then(res => res.data);
};

export const fetchCast = movieId => {
	return axios.get(`/movie/${movieId}/credits`).then(res => res.data.cast);
};

export const fetchReviews = movieId => {
	return axios.get(`/movie/${movieId}/reviews`).then(res => res.data.results);
};

export const searchMovies = query => {
	return axios
		.get(`/search/movie?query=${query}`)
		.then(res => res.data.results);
};
