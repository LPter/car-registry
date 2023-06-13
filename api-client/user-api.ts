import axiosClient from './axios-client'

export const userApi = {
	getDetailUser(id:number) {
		return axiosClient.get(`/users/${id}`)
	},

	addUser(payload:any) {
		return axiosClient.post('/users', payload)
	},

	editUser(payload:any, id:number) {
		return axiosClient.put(`/users/${id}`, payload)
	},

	deleteUser(id:number) {
		return axiosClient.delete(`/users/${id}`)
	},
}