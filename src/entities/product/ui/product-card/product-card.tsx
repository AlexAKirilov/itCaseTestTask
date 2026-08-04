import React, {FC, useState} from "react";
import cn from 'classnames';
import './product-card.css'
import {Text} from "@/shared/ui/text";
import {Button} from "@/shared/ui/button";
import {ProductDTO} from "@/entities/product/model/types";
import {ProductColorDTO} from "@/entities/color/types";
import {ColorPickButton} from "@/shared/ui/color-pick-button/ui/color-pick-button";
import {ArrowButton} from "@/shared/ui/arrow-button";

export interface ProductCardProps {
    product_data: ProductDTO
    default_color_id: number
    on_details_click: (product_id: number) => void
    custom_classnames?: string[] | string
}

export const ProductCard: FC<ProductCardProps> = props => {
    const { product_data, default_color_id, on_details_click, custom_classnames } = props

    const [selectedColorId, setColorId] = useState<number>(default_color_id)

    const selectedColor: ProductColorDTO = product_data.colors.find(
        color => color.id === selectedColorId
    )!

    const handleSetColor = (color_id: number) => {
        setCurrentImageIndex(0)
        setColorId(color_id)
    }

    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)

    const handleNextImageClick = () => {
        setCurrentImageIndex(currentImageIndex == selectedColor.images.length - 1 ? 0 : currentImageIndex + 1)
    }

    const handlePreviousImageClick = () => {
        setCurrentImageIndex(currentImageIndex == selectedColor.images.length - 1 ? 0 : currentImageIndex + 1)
    }

    const isOnlyImage = selectedColor.images.length == 1

    const handleDetailsClick = () => {
        on_details_click(product_data.id)
    }

    return (
        <div className={cn('product__card', custom_classnames)}>
            <div className={'product__image-container'}>
                <img className={'product__image'} src={require(`@/shared/assets${selectedColor.images[currentImageIndex]}`)} alt={`Изображение продукта: ${product_data.name}`}/>
                <ArrowButton buttonDirection={"toNext"} onClickAction={handleNextImageClick} customClassname={cn('image__btn', {'image__btn-hidden': isOnlyImage}, 'image__btn-next')}/>
                <ArrowButton buttonDirection={"toPrevious"} onClickAction={handlePreviousImageClick} customClassname={cn('image__btn', {'image__btn-hidden': isOnlyImage}, 'image__btn-previous')}/>
            </div>
            <div className={'product__info'}>
                <div className={'product__colors'}>
                    {product_data.colors.map((color) => (
                        <ColorPickButton
                            color={color.hex}
                            on_click={() => handleSetColor(color.id)}
                            is_selected={selectedColorId === color.id}
                            disabled={color.sizes.length < 1}
                            key={color.id}
                        />
                    ))}
                </div>
                <Text custom_classnames={'product__price'} typo={"primary_md"} align={"left"}>
                    {selectedColor.price}
                </Text>
                <Text custom_classnames={'product__name'} typo={"primary_md"} align={"left"}>
                    {product_data.name}
                </Text>
            </div>
            <Button customClassnames={cn('product__btn')} onClickAction={handleDetailsClick} disabled={selectedColor.sizes.length < 1}>
                <Text typo={"secondary_sbold"} align={"center"}>
                    {selectedColor.sizes.length < 1 ? "нет в наличии" : "подробнее"}
                </Text>
            </Button>
        </div>
    )
}