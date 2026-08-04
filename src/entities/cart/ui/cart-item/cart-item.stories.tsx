import { Meta, StoryObj } from "@storybook/react";

import {CartItem} from "./cart-item";
import {CartItemDTO} from "@/entities/cart/model/types";

const mockItem: CartItemDTO = {
    product_id: 1,
    color_id: 1,
    size_id: 2,
    quantity: 2,
    product_name: "Футболка",
    brand: "Basic Club",
    color_name: "черный",
    color_hex: "#000000",
    size_name: "S",
    price: "123.00",
    image: "/images/1/black_front.png",
}

const meta: Meta<typeof CartItem> = {
    title: 'entities/CartItem',
    component: CartItem,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Строка товара в корзине с изменением количества, суммой по позиции и удалением.',
            },
        },
    },
} satisfies Meta<typeof CartItem>

export default meta
type Story = StoryObj<typeof meta>

export const Позиция_в_корзине: Story = {
    args: {
        item: mockItem,
        on_update_quantity: () => {},
        on_remove: () => {},
    },
}
