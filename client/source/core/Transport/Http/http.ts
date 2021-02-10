import { queryString } from '../../../utils/queryString/index.js';

export type Data = string | { [index: string]: string | any[] } | null;
export type Options = {
  data?: Data;
  getParam?: {} | null;
  timeout?: number | null;
  method?: string;
  headers?: {};
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
  options: Options = {
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

  public get = (
    url: string,
    options: Options = {},
  ): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: Methods.GET });
  };

  public post = (
    url: string,
    options: Options = {},
  ): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: Methods.POST });
  };

  public put = (
    url: string,
    options: Options = {},
  ): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: Methods.PUT });
  };

  public delete = (
    url: string,
    options: Options = {},
  ): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: Methods.DELETE });
  };

  private request = (
    url: string,
    options: Options = {},
  ): Promise<XMLHttpRequest> => {
    const { data, method, timeout, getParam } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      if (method === Methods.GET && getParam) {
        url = `${url}${queryString(getParam)}`;
      }

      method && xhr.open(method, `${this.apiBaseUrl}${url}`);
      xhr.setRequestHeader('Content-Type', 'application/json');
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
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}
