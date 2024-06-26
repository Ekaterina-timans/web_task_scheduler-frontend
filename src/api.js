import axios from "axios"
import { TOKEN } from "./app.constant"
import Cookies from "js-cookie"

const API_URL = 'http://api/'

const options = {
	baseURL: API_URL,
	headers: {
        'Content-Type': 'application/json',
	}
}

export const $axios = axios.create(options)
  
$axios.interceptors.request.use(config => {
        const token = Cookies.get(TOKEN)
        if (config?.headers && token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
	}
)

$axios.interceptors.response.use(
	response => response,
	error => {
        if (error.response.status === 401) {
            Cookies.remove(TOKEN)
            window.location = '/auth'
        }
        return Promise.reject(error)
	}
)