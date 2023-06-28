import axios, { AxiosResponse } from "axios";
import type { ApiRequestProps } from "./index.type";

const instance = axios.create({
  baseURL: "http://localhost/erp/api",
  headers: {
    accept: "application/json",
    "content-type": "application/json",
  },
});

export const apiRequest = async ({
  apiId,
  token,
}: ApiRequestProps): Promise<AxiosResponse<never>> =>
  await instance.get(`/warehouse/list?website_id=${apiId}`);
