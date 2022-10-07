import axios from 'axios';
import { getCookie, setCookie, removeCookie } from './Cookie';

const BASE_URL = '/'

const axiosAPI = (url, options) => {
    const instance = axios.create({ baseURL: url, ...options })
    return instance
}

const axiosAuthAPI = (url, options) => {
    const instance = axios.create({
        baseURL: url,
        headers: {
            Authorization: `Bearer ${getCookie("token")}`
        },
        ...options,
    })
    return instance
}
const saveToken = (res) => {
    removeCookie('user')
    removeCookie('token')
    removeCookie('role')
    localStorage.setItem('user', res.data.loginId);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.role);
    setCookie('user', res.data.loginId);
    setCookie("token", res.data.token);
    setCookie('role', res.data.role);
}

export const defaultInstance = axiosAPI(BASE_URL)
export const authInstance = axiosAuthAPI(BASE_URL)
export default saveToken