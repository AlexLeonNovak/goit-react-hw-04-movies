import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.interceptors.request.use(request => {
	request.params = request.params || {};
	request.params['api_key'] = '66c7d7924e5f50bb2a8191fccc5d9fde';
	return request;
});

export const fetchTrading = () => {
	return axios.get('/trending/all/week').then(res => res.data.results);
};
