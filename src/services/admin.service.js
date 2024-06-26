import { $axios } from "../api"

export const BASE_URL = '/admin/users'

export const AdminService = {

    async getUsers() {
        const response = await $axios.get(BASE_URL)
        return response.data
    },

    async getUsersBanned() {
        const response = await $axios.get(`${BASE_URL}/banned`)
        return response.data
    },

    async userBanned(id, data) {
        const response = await $axios.post(`${BASE_URL}/banned/${id}`, data)
        return response.data
    },

    async userUpdate(id, data) {
        const response = await $axios.put(`${BASE_URL}/banned/${id}`, data)
        return response.data
    },

    async userDelete(id) {
        const response = await $axios.delete(`${BASE_URL}/banned/${id}`)
        return response.data
    }
}