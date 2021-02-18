export function response(xhr) {
    return new Promise((resolve, reject) => {
        xhr
            .then((res) => {
            switch (res.status) {
                case 200:
                case 204:
                    resolve(xhr);
                    break;
                case 401:
                    reject('errorUnauthorized');
                    break;
                case 403:
                    reject('errorForbidden');
                    break;
                case 404:
                    reject('errorNotFound');
                    break;
                default:
                    const errorStr = JSON.parse(res.response).reason;
                    reject(errorStr);
                    break;
            }
        })
            .catch((error) => {
            console.error(error);
            reject('error500');
        });
    });
}
//# sourceMappingURL=response.js.map