import Axios from 'axios'

export const BASE_URL = 'https://tinyurl.com'

const axios = Axios.create({
    baseURL: BASE_URL
})

async function doRequest(url, method = 'GET', data = null) {
    const params = (method === 'GET') ? data : null
    const options = {url, method, data, params}
    try {
        const res = await axios(options)
        return res.data
    } catch (err) {
        console.dir(err)
        throw err
    }
}

export function get(endpoint) {
    return doRequest(endpoint)
}

export function post(endpoint, data) {
    return doRequest(endpoint, 'POST', data)
}

export function put(endpoint, data) {
    return doRequest(endpoint, 'PUT', data)
}

export function remove(endpoint, data) {
    return doRequest(endpoint, 'DELETE', data)
}

