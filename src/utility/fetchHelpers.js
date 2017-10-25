import {ROOT_URL} from './../constants/urlConstants';

export const request = (path, method, body = null) => {
	let headers = {
		'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
	};
	const token = window.localStorage.getItem('token');
	if(token){
		headers['auth-token'] = token;
	}
	return fetch(`${ROOT_URL}${path}`, {
		method: method,  
		headers: headers,  
		body: body
	})
		.then(res => res.json())
		.then(result => {
			return result;
		});
};
