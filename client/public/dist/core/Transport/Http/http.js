import { queryString } from '../../../utils/queryString/index.js';
var Methods;
(function (Methods) {
    Methods["GET"] = "GET";
    Methods["PUT"] = "PUT";
    Methods["POST"] = "POST";
    Methods["DELETE"] = "DELETE";
    Methods["HEAD"] = "HEAD";
    Methods["PATCH"] = "PATCH";
})(Methods || (Methods = {}));
export class HTTPTransport {
    constructor(url) {
        this.options = {
            data: null,
            getParam: null,
            timeout: null,
            method: '',
            headers: {},
        };
        this.get = (url, options = {}) => {
            return this.request(url, { ...options, method: Methods.GET });
        };
        this.post = (url, options = {}) => {
            return this.request(url, { ...options, method: Methods.POST });
        };
        this.put = (url, options = {}) => {
            return this.request(url, { ...options, method: Methods.PUT });
        };
        this.delete = (url, options = {}) => {
            return this.request(url, { ...options, method: Methods.DELETE });
        };
        this.request = (url, options = {}) => {
            const { data, method, timeout, getParam, headers } = options;
            return new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                if (method === Methods.GET && getParam) {
                    url = `${url}${queryString(getParam)}`;
                }
                method && xhr.open(method, `${this.apiBaseUrl}${url}`);
                if (headers) {
                    Object.entries(headers).forEach(([key, value]) => xhr.setRequestHeader(key, value));
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
                }
                else if (data instanceof FormData) {
                    xhr.send(data);
                }
                else {
                    xhr.setRequestHeader('Content-Type', 'application/json');
                    xhr.send(JSON.stringify(data));
                }
            });
        };
        this.apiBaseUrl = url;
    }
}
//# sourceMappingURL=http.js.map