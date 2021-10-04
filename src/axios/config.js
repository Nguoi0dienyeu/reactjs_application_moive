import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.interceptors.request.use(function (config) {
	// DO somthing with request sent
	if (!config.params) {
		config.params={};
	}
	config.params.api_key ='e7d1a25f4b340e09aa16db0f949d2a5e';
	return config;
}, function (error) {
	// Do something request error
	return Promise.reject(error);
});
console.log("-> Config Axios youtube");