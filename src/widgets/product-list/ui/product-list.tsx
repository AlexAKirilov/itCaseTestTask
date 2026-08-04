import React, { FC } from "react";
import cn from 'classnames'
import {useNavigate} from "react-router-dom";
import './product-list.css'
import {ProductCard} from "@/entities/product/ui/product-card/product-card";
import {useProducts} from "@/entities/product/hooks/use-products";
import {filterProducts} from "@/entities/product/lib/filter-products";
import {Text} from "@/shared/ui/text";
import {Loader} from "@/shared/ui/loader/ui/loader";

export interface ProductListProps {
    onlyInStock?: boolean;
    sortBy?: 'asc' | 'desc' | null;
    searchQuery?: string;
}

export const ProductList: FC<ProductListProps> = ({ 
    onlyInStock = false, 
    sortBy = null,
    searchQuery = ''
}) => {
    const navigate = useNavigate()
    const {data, isLoading, error} = useProducts()

    if (isLoading) return <Loader />

    if (error) return <Text typo={"primary_lg"}>{`Произошла ошибка: ${error}`}</Text>;

    const filteredData = data
        ? filterProducts({ products: data, onlyInStock, sortBy, searchQuery })
        : null;

    const handleDetailsClick = (product_id: number) => {
        navigate(`/product?id=${product_id}`)
    }

    return (
        <section className={cn('product__list', 'section')}>
            {filteredData && filteredData.length > 0 ?
                filteredData.map((product) => (
                <ProductCard
                    product_data={product}
                    default_color_id={1}
                    on_details_click={handleDetailsClick}
                    key={product.id}
                />
                )) : <Text typo={"primary_md"}>{"Ничего не найдено"}</Text>}
        </section>
    )
}