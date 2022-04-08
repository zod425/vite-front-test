import request from "@/api";
import { AxiosPromise } from "axios";

const API_PATH_PREFIX = "/member/exam";

/**
 * 인증 관련 API
 */
export default {
  /**
   * [GET] kafka
   */
  kafka: (params): AxiosPromise => {
    return request(`${API_PATH_PREFIX}/kafka`, {
          params: params,
        });
  },
  /**
   * [GET] testFeign
   */
  testFeign: (params): AxiosPromise => {
    return request(`${API_PATH_PREFIX}/testFeign`, {
      params: params,
    });
  },
  /**
   * [POST] testFeignError
   */
  testFeignError: (params): AxiosPromise => {
    return request(`${API_PATH_PREFIX}/testFeignError`, { method: "POST" , params: params});
  },
};
