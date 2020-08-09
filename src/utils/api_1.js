let api = {}

let BASEURL = 'http://localhost:3001/localserver/'


api.apiMethod = async function (method = 'GET', body = null, headers = null, authrization = null, url = null) {
    try {

        let headers = {};

        if (method !== 'GET') {
            headers['Content-Type'] = 'application/json';
        }

        const options = {
            method,
            headers
        }

        if (body) {
            options['body'] = JSON.stringify(body)
        }

        if (url) {
            console.log(BASEURL + url)
        }
        const response = await fetch(BASEURL, options);
        const json = await response.json();
        if (response.status !== 200) {
            throw new Error(json.message);
        }
        return await json

    } catch (error) {
        throw new Error(error.message);
    }
}
export default api