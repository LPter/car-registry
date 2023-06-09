import axiosClient from './axios-client'

export const carApi = {
	getListCar() {
		return axiosClient.get('/cars')
	},

    searchCar(number:number) {
		return axiosClient.get('/cars/:number')
	},

	uploadCars() {
		return axiosClient.post('/users/logout')
	},
    
    // addCar() {
    //     return axiosClient.post('/cars')
    // }
}