import {useQuery} from "react-query";
import {ProductsApiKeys} from "./Products.constants.js";
import {getProductById, getProducts} from "./Products.api.js";

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

