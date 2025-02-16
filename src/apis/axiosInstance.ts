import axios from 'axios'

const baseURL = import.meta.env.VITE_BASEURL

const api = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: baseURL,
})

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

export default api
