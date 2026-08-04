import React, {FC} from "react";
import cn from 'classnames';
import './product.css'
import {Text} from "@/shared/ui/text";
import {Button} from "@/shared/ui/button";
import {ColorPickButton} from "@/shared/ui/color-pick-button/ui/color-pick-button";
import {ArrowButton} from "@/shared/ui/arrow-button";
import {useProduct} from "@/entities/product/hooks/use-product";
import {Loader} from "@/shared/ui/loader/ui/loader";
import {addProductToCart} from "@/widgets/product-section/lib/add-product-to-cart";
import {ProductNotFound} from "@/widgets/product-section/ui/product-not-found";

export interface ProductProps {
    product_id: number
    default_color_id?: number
}

export const Product: FC<ProductProps> = props => {
    const { product_id, default_color_id } = props

    const {
        product_data,
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
    } = useProduct(product_id, default_color_id)

    const handleAddToCart = () => {
        if (!product_data || !selectedColor || !selectedSizeId) return
        addProductToCart(product_data, selectedColor, selectedSizeId, allSizes)
    }

    if (isLoading) return <Loader />

    if (isNotFound) return <ProductNotFound />

    if (error) return <Text typo={"primary_lg"}>{`Произошла ошибка: ${error}`}</Text>;

    if (!product_data || !selectedColor) return null

    return (
        <section className={cn('product__section', 'section')}>
            <div className={'product__section-info'}>
                <div className={'product__section-image__container'}>
                    <img className={'product__section-image'} src={require(`@/shared/assets${selectedColor.images[currentImageIndex]}`)} alt={`Изображение продукта: ${product_data.name}`}/>
                    <ArrowButton buttonDirection={"toNext"} onClickAction={handleNextImageClick} customClassname={cn('product__section-image__btn', {'image__btn-hidden': isOnlyImage}, 'image__btn-next')}/>
                    <ArrowButton buttonDirection={"toPrevious"} onClickAction={handlePreviousImageClick} customClassname={cn('product__section-image__btn', {'image__btn-hidden': isOnlyImage}, 'image__btn-previous')}/>
                </div>
                <div className={'product__section-side__content'}>
                    <div className={'product__section-side__text'}>
                        <Text custom_classnames={'product__section-brand'} typo={"primary_sm"} align={"left"}>
                            {product_data.brand}
                        </Text>
                        <Text custom_classnames={'product__section-name'} typo={"primary_md"} align={"left"}>
                            {product_data.name}
                        </Text>
                        <Text custom_classnames={'product__section-name'} typo={"primary_sm"} align={"left"}>
                            {selectedColor.description}
                        </Text>

                        <div className={'product__section-colors'}>
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

                        {allSizes.length > 0 && (
                            <div className={'product__section-sizes-container'}>
                                <Text custom_classnames={'product__section-brand'} typo={"primary_sm"} align={"left"}>
                                    Размер
                                </Text>
                                <div className={'product__section-sizes'}>
                                    {allSizes.map((size) => {
                                        const isAvailable = selectedColor.sizes.includes(size.id);
                                        return (
                                            <Button
                                                key={size.id}
                                                onClickAction={() => setSelectedSizeId(size.id)}
                                                customClassnames={cn(
                                                    'product__section-size-btn',
                                                    selectedSizeId === size.id && 'active'
                                                )}
                                                disabled={!isAvailable}
                                            >
                                                <Text 
                                                    typo={selectedSizeId === size.id ? "secondary_sbold" : "primary_sm"}
                                                    align={"center"}
                                                >
                                                    {size.name}
                                                </Text>
                                            </Button>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={'product__section-side__actions'}>
                        <Button 
                            customClassnames={cn('product__section-cart__btn')} 
                            onClickAction={handleAddToCart}
                            disabled={selectedColor.sizes.length < 1 || !selectedSizeId}
                        >
                            <Text typo={"secondary_sbold"} align={"center"}>
                                {selectedColor.sizes.length < 1 
                                    ? "нет в наличии" 
                                    : !selectedSizeId 
                                        ? "выберите размер" 
                                        : `добавить в корзину | ${selectedColor.price}`
                                }
                            </Text>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
