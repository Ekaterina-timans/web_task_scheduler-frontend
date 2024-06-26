import Cookies from "js-cookie"
import { $axios } from "../api"
import { TOKEN } from "../app.constant"

export const AuthService = {
    async main(email, password, type) {
		try {
			const { data } = await $axios.post(`/auth/${type}`, {
				user_email: email,
				user_psw: password
			})

			if (data.token) Cookies.set(TOKEN, data.token)

			return data
		} catch (error) {
			throw new Error(error)
		}
	},

	async logout() {
		const data = await $axios.post('/auth/logout')

		if (data) {
			Cookies.remove(TOKEN)
		}

		return data
	}
}