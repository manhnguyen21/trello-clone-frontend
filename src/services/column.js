import axiosInstance from "axiosInstance"

export const createNewColumn = (data) => axiosInstance.post("/v1/column", data)
