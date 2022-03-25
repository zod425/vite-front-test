import request from "@/api";import { AxiosPromise } from "axios";const API_PATH_PREFIX = "/exam";/** * 인증 관련 API */export default {  /**   * [GET] kafka   */  kafka: (params): AxiosPromise => {    return request(`${API_PATH_PREFIX}/kafka`, {          params: params,        });  },  /**   * [GET] getFeign   */  getFeign: (params): AxiosPromise => {    return request(`${API_PATH_PREFIX}/getFeign`, {      params: params,    });  },  /**   * [POST] setFeign   */  setFeign: (params): AxiosPromise => {    return request(`${API_PATH_PREFIX}/setFeign`, { method: "POST" , params: params});  },};