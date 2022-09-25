import axiosInstance from "axiosInstance"

export const createNewCard = (data) => axiosInstance.post("/v1/card", data)

export const createNewCardAtTop = (data) =>
  axiosInstance.post("/v1/card/top", data)

export const updateCard = (data) =>
  axiosInstance.put(`/v1/card/${data._id}`, data)
