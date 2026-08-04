import {useEffect, useState} from "react";
import {ProductDTO} from "@/entities/product/model/types";
import {ProductColorDTO} from "@/entities/color/types";
import {ProductSizeDTO} from "@/entities/size/types";
import {getProduct, getSizes} from "@/shared/api/api";


export const useProduct = (product_id: number, default_color_id?: number) => {
    const [data, setData] = useState<ProductDTO | null>(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isNotFound, setIsNotFound] = useState(false);
    const [allSizes, setAllSizes] = useState<ProductSizeDTO[]>([])
    const [selectedColorId, setColorId] = useState<number | null>(null)
    const [selectedSizeId, setSelectedSizeId] = useState<number | null>(null)
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    useEffect(() => {
        setIsLoading(true)
        setIsNotFound(false)
        setError(null)
        getProduct(product_id)
            .then((product: ProductDTO) => {
                setData(product)
                const initialColorId = default_color_id ?? product.colors[0]?.id ?? null
                setColorId(initialColorId)
            })
            .catch((error) => {
                const message = error instanceof Error ? error.message : String(error)

                if (message.includes('Product not found')) {
                    setIsNotFound(true)
                } else {
                    setError(message)
                }
            })
            .finally(() => setIsLoading(false));
    }, [product_id, default_color_id]);

    useEffect(() => {
        getSizes().then((sizesList) => {
            setAllSizes(sizesList as ProductSizeDTO[])
        })
    }, [])

    const selectedColor: ProductColorDTO | null = data && selectedColorId
        ? data.colors.find(color => color.id === selectedColorId) ?? null
        : null

    const handleSetColor = (color_id: number) => {
        setCurrentImageIndex(0)
        setColorId(color_id)
        setSelectedSizeId(null)
    }

    const handleNextImageClick = () => {
        if (!selectedColor) return
        setCurrentImageIndex(currentImageIndex == selectedColor.images.length - 1 ? 0 : currentImageIndex + 1)
    }

    const handlePreviousImageClick = () => {
        if (!selectedColor) return
        setCurrentImageIndex(currentImageIndex == selectedColor.images.length - 1 ? 0 : currentImageIndex + 1)
    }

    const isOnlyImage = selectedColor ? selectedColor.images.length == 1 : true

    return {
        product_data: data,
        isLoading,
        isNotFound,
        error,
        allSizes,
        selectedColorId,
        selectedSizeId,
        selectedColor,
        currentImageIndex,
        isOnlyImage,
        handleSetColor,
        handleNextImageClick,
        handlePreviousImageClick,
        setSelectedSizeId,
    }
}
