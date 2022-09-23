import axiosInstance from "axiosInstance"

export const createNewColumn = (data) => axiosInstance.post("/v1/column", data)

export const updateColumn = (data) =>
  axiosInstance.put(`/v1/column/${data._id}`, data)
