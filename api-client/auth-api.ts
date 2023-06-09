import axiosClient from './axios-client'

interface LoginPayload {
    username: string
	password: string
}

export const authApi = {
	login(payload: LoginPayload) {
		return axiosClient.post('/users/login', payload)
	},

    getCurrentUser() {
		return axiosClient.get('/users/current')
	},

	logout() {
		return axiosClient.post('/users/logout')
	},
}