import { $axios } from "../api"

export const BASE_URL = '/user/tasks'

export const TaskService = {

    async getTasks() {
        const response = await $axios.get(BASE_URL)
        return response.data
    },

    async createTask(data) {
        const response = await $axios.post(BASE_URL, data)
        return response.data
    },

    async updateTask(id, data) {
        const response = await $axios.put(`${BASE_URL}/${id}`, data)
        return response.data
    },

    async updateTaskStatus(id, data) {
        const response = await $axios.put(`${BASE_URL}/${id}`, data)
        return response.data
    },

    async deleteTask(id) {
        const response = await $axios.delete(`${BASE_URL}/${id}`)
        return response.data
    },

    async getTask(searchTerm) {
        const response = await $axios.get(`${BASE_URL}/search`, {
            params: searchTerm
				? { searchTerm, }
				: {},
        })
        return response.data
    }
}