import axios from 'axios'

import camelCase from 'camelcase-keys-deep'

export const backend = axios.create({
	baseURL: 'https://darlene-backend.herokuapp.com/',
	withCredentials: true
})

backend.interceptors.request.use(request => {
  return request
}, error => {
  return error
})

backend.interceptors.response.use(response => {
	return camelCase(response.data, { deep: true })
})

// const auth = new AuthService();

export const grader = axios.create({
	baseURL: 'https://b2757d6e-6fd4-4877-887f-7cc9531408a8.mock.pstmn.io'
	// baseURL: 'https://darlene-okpy.herokuapp.com',
	// withCredentials: true
})

// grader.interceptors.response.use(response => response.data);
