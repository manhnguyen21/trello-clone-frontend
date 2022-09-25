import axiosInstance from "axiosInstance"

export const getBoardById = ({ id }) => axiosInstance.get("/v1/board/" + id)

export const updateBoard = (data) =>
  axiosInstance.put(`/v1/board/${data._id}`, data)
