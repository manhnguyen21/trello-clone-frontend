import axiosInstance from "axiosInstance"

export const createNewCard = (data) => axiosInstance.post("/v1/card", data)

export const createNewCardAtTop = (data) =>
  axiosInstance.post("/v1/card/top", data)
