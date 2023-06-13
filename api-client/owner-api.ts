import axiosClient from './axios-client'

export const ownerApi = {
	getDetailOwner(id:number) {
		return axiosClient.get(`/owners/${id}`)
	},

	addOwner(payload:any) {
		return axiosClient.post('/owners', payload)
	},

	editOwner(payload:any, id:number) {
		return axiosClient.put(`/owners/${id}`, payload)
	},

	deleteOwner(id:number) {
		return axiosClient.delete(`/owners/${id}`)
	},
}