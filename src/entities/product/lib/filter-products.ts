import {ProductDTO} from "@/entities/product/model/types";

export interface FilterProductsParams {
    products: ProductDTO[]
    only_in_stock?: boolean
    sort_by?: 'asc' | 'desc' | null
    search_query?: string
}

const getMinPrice = (product: ProductDTO): number => {
    if (!product.colors || product.colors.length === 0) return 0;
    const prices = product.colors.map(color => parseFloat(color.price) || 0);
    return Math.min(...prices);
}

export const filterProducts = ({
    products,
    only_in_stock = false,
    sort_by = null,
    search_query = '',
}: FilterProductsParams): ProductDTO[] => {
    let result = products.filter(product => {
        if (only_in_stock && !product.colors.some(color => color.sizes && color.sizes.length > 0)) {
            return false;
        }

        if (search_query.trim()) {
            const query = search_query.toLowerCase().trim();
            return product.name.toLowerCase().includes(query);
        }

        return true;
    });

    if (sort_by) {
        result = [...result].sort((a, b) => {
            const priceA = getMinPrice(a);
            const priceB = getMinPrice(b);
            return sort_by === 'asc' ? priceA - priceB : priceB - priceA;
        });
    }

    return result;
}
