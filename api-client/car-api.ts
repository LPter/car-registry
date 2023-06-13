import axiosClient from './axios-client'

interface fileUpload {
	file: FormData,
}

export const carApi = {
	searchCar(number:string) {
		return axiosClient.get(`/cars/${number}`)
	},

	addCar(payload:any) {
		return axiosClient.post('/cars', payload)
	},

	editCar(payload:any, id:number) {
		return axiosClient.put(`/cars/${id}`, payload)
	},

	deleteCar(id:number) {
		return axiosClient.delete(`/cars/${id}`)
	},

	uploadCars(payload: fileUpload) {
		return axiosClient.post('/cars/upload', payload)
	},
}