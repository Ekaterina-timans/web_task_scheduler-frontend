import { $axios } from "../api"

export const BASE_URL = '/user/profile'

export const UserService = {

    async getProfile() {
        const response = await $axios.get(BASE_URL)
        return response.data
    },

    async updateProfile(data) {
        const response = await $axios.put(BASE_URL, data)
        return response.data
    }
}