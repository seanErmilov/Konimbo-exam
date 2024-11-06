import { useQuery } from "react-query";
import { HomeApiKeys } from "./Home.constants.js";
import { getProducts } from "./Home.api.js";
import { useEffect } from "react";
import { writeStorage } from '@rehooks/local-storage';

export function useFetchProducts() {
    const query = useQuery({
        queryKey: [HomeApiKeys.GetProducts],
        queryFn: getProducts,
    })

    useEffect(() => {
        if (query.data) {
            writeStorage('data', query.data)
        }
    }, [query.data])

    return query
}

