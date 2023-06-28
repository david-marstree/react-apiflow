import axios from "axios";
import type { ApiRequestProps } from "./type";

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
}: ApiRequestProps): Promise<any> =>
  await instance.get(`/warehouse/list?website_id=${apiId}`);
