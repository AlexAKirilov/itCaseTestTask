import React, { FC } from "react";
import { useSearchParams } from "react-router-dom";
import {Product} from "@/widgets/product-section/ui/product";
import {ProductNotFound} from "@/widgets/product-section/ui/product-not-found";

const parseSearchParamId = (value: string | null): number | undefined => {
    if (!value) return undefined

    const parsed = Number(value)
    return Number.isNaN(parsed) ? undefined : parsed
}

export const ProductItemPage: FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const productId = searchParams.get("id");
    const parsedProductId = Number(productId);
    const defaultColorId = parseSearchParamId(searchParams.get("color"));
    const defaultSizeId = parseSearchParamId(searchParams.get("size"));

    const handleSelectionChange = (color_id: number | null, size_id: number | null) => {
        setSearchParams(prev => {
            if (color_id) {
                prev.set("color", String(color_id))
            } else {
                prev.delete("color")
            }

            if (size_id) {
                prev.set("size", String(size_id))
            } else {
                prev.delete("size")
            }

            return prev
        }, { replace: true })
    }

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
            <Product
                product_id={parsedProductId}
                default_color_id={defaultColorId}
                default_size_id={defaultSizeId}
                on_selection_change={handleSelectionChange}
            />
        </>
    )
}
