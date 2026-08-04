import {ProductDTO} from "@/entities/product/model/types";
import {ProductColorDTO} from "@/entities/color/types";
import {ProductSizeDTO} from "@/entities/size/types";
import {cartService} from "@/entities/cart/lib/cart-service";

export const addProductToCart = (
    product: ProductDTO,
    color: ProductColorDTO,
    sizeId: number,
    allSizes: ProductSizeDTO[],
) => {
    const size = allSizes.find(s => s.id === sizeId)
    if (!size) return

    cartService.addItem({
        product_id: product.id,
        color_id: color.id,
        size_id: sizeId,
        quantity: 1,
        product_name: product.name,
        brand: product.brand,
        color_name: color.name,
        color_hex: color.hex,
        size_name: size.name,
        price: color.price,
        image: color.images[0],
    })
}
