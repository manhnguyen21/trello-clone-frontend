import axiosInstance from "axiosInstance"

export const getBoardById = ({ id }) => axiosInstance.get("/v1/board/" + id)
