import { useQuery } from "react-query";
import { ProductsApiKeys } from "./Products.constants.js";
import { getProductById, getProducts } from "./Products.api.js";
import { useEffect } from "react";

export function useFetchProducts() {
    return useQuery({
        queryKey: [ProductsApiKeys.GetProducts],
        queryFn: getProducts,
    })
}

export function useFetchProductById(id) {
    return useQuery({
        queryKey: [ProductsApiKeys.GetProducts, id],
        queryFn: () => getProductById(id),
    })
}

export async function useFetchProductsSimple() {

    try {
        const response = await fetch('https://tinyurl.com/vht7ah2')
        return response.json()
    }
    catch (error) {
        console.log('eror fetching data', error)
        return null
    }
}

