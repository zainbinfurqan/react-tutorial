let api = {}

// const BASEURL = 'https://arcane-waters-35831.herokuapp.com/api/wallet'
const BASEURL = 'http://localhost:3001/localserver'
// const BASEURL = 'https://jsonplaceholder.typicode.com/posts'
api.apiMethod = async function (method = "GET", body = null, headers = null) {

    const options = {};

    if (method) {
        options.method = method
    }

    if (body) {
        options.body = body
    }

    if (headers) {
        options.headers = headers
    }

    const response = await fetch(BASEURL, options)
    let json = await response.json()
    if (response.status !== 200) {
        throw new Error(json.message);
    }
    return await json;
}

export default api