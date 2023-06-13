import axios from 'axios'
import axiosClient from './axios-client'

export const inspectionApi = {
	getDetailInspection(id:number) {
		return axiosClient.get(`/inspections/${id}`)
	},

	addInspection(payload:any) {
		return axiosClient.post('/inspections', payload)
	},

	editInspection(payload:any, id:number) {
		return axiosClient.put(`/inspections/${id}`, payload)
	},

	deleteInspection(id:number) {
		return axiosClient.delete(`/inspections/${id}`)
	},
}