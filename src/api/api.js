// properties

import axios from "axios";
import { getData } from "../storage/storage";

// export const schoolUrl = "http://10.0.2.2:8000";
export const schoolUrl = "http://127.0.0.1:8000";
export const baseUrl = "";

const DEBUG_TOKEN = "3p33rmhfjSFtirQi6dwG7FfC7MTsCitE";

const KEY_SCHOOL_TOKEN = "token";
const KEY_BACKEND_TOKEN = "server-token";

export interface Response {
  code: number,
  data: Object,
  msg: string
}

export const INTERNAL_FAILURE: Response = {
  code: 500,
  data: undefined,
  msg: "内部服务器错误！",
};

export const get = async (url: string, params = {}): Promise<Response> => {
  return axios.get(url, {
    params: params,
  }).then((res) => {
    if (res.status !== 200) return INTERNAL_FAILURE;
    return res.data;
  });
};

export const post = async (url: string, body, params = {}): Promise<Response> => {
  let _url = new URL(url);
  Object.keys(params).forEach(key => _url.searchParams.append(key, params[key]));
  return fetch(_url, {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then(res => {
    return res.ok ? res.json() : res;
  })
    .then((res) => {
      if (res.code !== 200) return INTERNAL_FAILURE;
      return res;
    });
};


// school related

export const getTimetable = async () => {
  const token = DEBUG_TOKEN || await getData(KEY_SCHOOL_TOKEN);
  return get(schoolUrl + "/get_timetable", {
    token: token,
  }).then(res => res.data);
};

export const getTimetableBy = async () => {
  const token = DEBUG_TOKEN || await getData(KEY_SCHOOL_TOKEN);
  return post(schoolUrl + "/get_timetable_by", {
    year: "2019-2020",
    semester: "2",
  }, { token: token }).then(res => res.data);
};

export const getNewestScore = async () => {
  const token = DEBUG_TOKEN || await getData(KEY_SCHOOL_TOKEN);
  return get(schoolUrl + "/get_score", {
    token: token,
  }).then(res => res.data);
};


// server
