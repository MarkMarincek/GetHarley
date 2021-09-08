import axios, { AxiosInstance } from 'axios';
import { ApiResponse } from 'models/interfaces';
import { API_TOKEN, API_URL } from 'utils/environment';

class HttpService {
  service: AxiosInstance;
  constructor() {
    this.service = axios.create({ baseURL: API_URL, headers: { 'app-id': API_TOKEN } });
  }

  get<T>(path: string) {
    return this.service.request<ApiResponse<T>>({
      method: 'GET',
      url: path,
      responseType: 'json',
    });
  }

  put<T>(path: string, payload: unknown) {
    return this.service.request<ApiResponse<T>>({
      method: 'PUT',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  patch<T>(path: string, payload: unknown) {
    return this.service.request<ApiResponse<T>>({
      method: 'PATCH',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  post<T>(path: string, payload: unknown) {
    return this.service.request<ApiResponse<T>>({
      method: 'POST',
      url: path,
      responseType: 'json',
      data: payload,
    });
  }

  delete<T>(path: string) {
    return this.service.request<ApiResponse<T>>({
      method: 'DELETE',
      url: path,
      responseType: 'json',
    });
  }
}

export default new HttpService();
