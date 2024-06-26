import { $axios } from "../api"

export const BASE_URL = '/user/tasks/files'

export const FileService = {

    async getFiles(id) {
        const response = await $axios.get(`${BASE_URL}/${id}`)
        return response.data
    },

	async upload(id, file) {
		const formData = new FormData()
    	formData.append('file', file)
		console.log(formData)
		const response = await $axios.post(`${BASE_URL}/${id}`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		})
		return response.data
	}
}