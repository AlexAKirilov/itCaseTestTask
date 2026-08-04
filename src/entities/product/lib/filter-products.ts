import {ProductDTO} from "@/entities/product/model/types";

export interface FilterProductsParams {
    products: ProductDTO[]
    onlyInStock?: boolean
    sortBy?: 'asc' | 'desc' | null
    searchQuery?: string
}

const getMinPrice = (product: ProductDTO): number => {
    if (!product.colors || product.colors.length === 0) return 0;
    const prices = product.colors.map(color => parseFloat(color.price) || 0);
    return Math.min(...prices);
}

export const filterProducts = ({
    products,
    onlyInStock = false,
    sortBy = null,
    searchQuery = '',
}: FilterProductsParams): ProductDTO[] => {
    let result = products.filter(product => {
        if (onlyInStock && !product.colors.some(color => color.sizes && color.sizes.length > 0)) {
            return false;
        }

        if (searchQuery.trim()) {
            const query = searchQuery.toLowerCase().trim();
            return product.name.toLowerCase().includes(query);
        }

        return true;
    });

    if (sortBy) {
        result = [...result].sort((a, b) => {
            const priceA = getMinPrice(a);
            const priceB = getMinPrice(b);
            return sortBy === 'asc' ? priceA - priceB : priceB - priceA;
        });
    }

    return result;
}
