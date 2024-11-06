import {useQuery} from "react-query";
import {HomeApiKeys} from "./Home.constants.js";
import {getProducts} from "./Home.api.js";

export const useFetchProducts = () => {
    return useQuery({
        queryKey: [HomeApiKeys.GetProducts],
        queryFn: getProducts,
    });
};