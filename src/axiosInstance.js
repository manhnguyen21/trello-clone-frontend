import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://localhost:8017",
  timeout: 10000,
  headers: {
    "content-type": "application/json",
  },
})

axiosInstance.interceptors.request.use(async (config) => config)

axiosInstance.interceptors.response.use(
  (response) => {
    if (response && response) {
      return response.data
    }
  },
  (error) => {
    throw error
  }
)

export default axiosInstance
