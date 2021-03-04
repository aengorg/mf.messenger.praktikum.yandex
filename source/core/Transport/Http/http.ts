import { queryString } from '../../../utils/queryString/index';
import { response } from './response';

export type Data =
  | null
  | string
  | FormData
  | { [index: string]: string | number | any[] };

export type TypeHeaders = {
  [key: string]: string;
};

export type TypeOptions = {
  data?: Data;
  getParam?: {} | null;
  timeout?: number | null;
  method?: string;
  headers?: TypeHeaders;
};

enum Methods {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
  HEAD = 'HEAD',
  PATCH = 'PATCH',
}

export class HTTPTransport {
  options: TypeOptions = {
    data: null,
    getParam: null,
    timeout: null,
    method: '',
    headers: {},
  };

  private apiBaseUrl: string;

  constructor(url: string) {
    this.apiBaseUrl = url;
  }

  public get = (url: string, options: TypeOptions = {}) => {
    return response(this.request(url, { ...options, method: Methods.GET }));
  };

  public post = (url: string, options: TypeOptions = {}) => {
    return response(this.request(url, { ...options, method: Methods.POST }));
  };

  public put = (url: string, options: TypeOptions = {}) => {
    return response(this.request(url, { ...options, method: Methods.PUT }));
  };

  public delete = (url: string, options: TypeOptions = {}) => {
    return response(this.request(url, { ...options, method: Methods.DELETE }));
  };

  private request = (
    url: string,
    options: TypeOptions = {},
  ): Promise<XMLHttpRequest> => {
    const { data, method, timeout, getParam, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === Methods.GET && getParam) {
        url = `${url}${queryString(getParam)}`;
      }

      method && xhr.open(method, `${this.apiBaseUrl}${url}`);

      if (headers) {
        Object.entries(headers).forEach(([key, value]) =>
          xhr.setRequestHeader(key, value),
        );
      }

      xhr.withCredentials = true;

      xhr.onload = function () {
        resolve(xhr);
      };

      if (timeout) {
        setTimeout(() => xhr.abort(), timeout);
      }

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === Methods.GET || !data) {
        xhr.send();
      } else if (data instanceof FormData) {
        xhr.send(data);
      } else {
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
