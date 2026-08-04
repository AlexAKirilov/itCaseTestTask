import {useEffect, useState} from "react";
import {ProductDTO} from "@/entities/product/model/types";
import {getProducts} from "@/shared/api/api";


export const useProducts = () => {
    const [data, setData] = useState<ProductDTO[] | null>(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        setIsLoading(true)
        getProducts()
            .then((productsList) => {
                setData(productsList)
            })
            .catch((error) => {
                setError(error instanceof Error ? error.message : String(error))
            })
            .finally(() => setIsLoading(false));
    }, []);

    return {
        data,
        isLoading,
        error
    }
}