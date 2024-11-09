import { get } from "../api.js"

export const getProducts = async () => {
    return get('/vht7ah2')
}

export const getProductById = async (id) => {
    return get(`/vht7ah2?itemIds=${id}`)
}