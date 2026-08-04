export interface CartItemDTO {
    product_id: number
    color_id: number
    size_id: number
    quantity: number
    product_name: string
    brand: string
    color_name: string
    color_hex: string
    size_name: string
    price: string
    image: string
}

export type CartItemKey = Pick<CartItemDTO, 'product_id' | 'color_id' | 'size_id'>
