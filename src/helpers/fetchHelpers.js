import {ROOT_URL} from './../constants/constants'

export const request = (path, method, body) => {
	return new Promise((resolve, reject) => {
		fetch(`${ROOT_URL}${path}`, {
			method: method,  
			headers: {  
				"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"  
			},  
			body: body
		})
		.then(res => res.json())
		.then(result => {
			return resolve(result);
		})
		.catch(function (error) {
			return reject("Request failed!", error);
		});
	})
}
