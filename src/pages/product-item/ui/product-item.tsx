import React, { FC } from "react";
import { useSearchParams } from "react-router-dom";
import {Product} from "@/widgets/product-section/ui/product";
import {ProductNotFound} from "@/widgets/product-section/ui/product-not-found";

export const ProductItemPage: FC = () => {
    const [searchParams] = useSearchParams();
    const productId = searchParams.get("id");
    const parsedProductId = Number(productId);

    if (!productId || Number.isNaN(parsedProductId)) {
        return (
            <>
                <title>Тестовое задание | Товар не найден</title>
                <ProductNotFound />
            </>
        )
    }

    return (
        <>
            <title>Тестовое задание | Продукт</title>
            <Product product_id={parsedProductId} />
        </>
    )
}
