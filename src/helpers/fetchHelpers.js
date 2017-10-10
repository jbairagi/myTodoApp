import {ROOT_URL} from './../constants/constants'

export const request = (path, method, body = null, token = null) => {
	return new Promise((resolve, reject) => {
		let headers = {
			"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		}
		if(token){
			headers["auth-token"] = token
		}
		fetch(`${ROOT_URL}${path}`, {
			method: method,  
			headers: headers,  
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
