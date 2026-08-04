import { Meta, StoryObj } from "@storybook/react";

import {ProductCard} from "./product-card";

const mockProduct = {
    id: 1,
    name: "Футболка",
    categoryId: 1,
    brand: "Basic Club",
    colors: [
        {
            id: 1,
            name: "черный",
            hex: "#000000",
            images: ["/images/1/black_front.png", "/images/1/black_back.png"],
            price: "123.00",
            description: 'Описание для "Футболка черный"',
            sizes: [1, 2, 3],
        },
        {
            id: 2,
            name: "белый",
            hex: "#ffffff",
            images: ["/images/1/white_front.png", "/images/1/white_back.png"],
            price: "125.00",
            description: 'Описание для "Футболка белый"',
            sizes: [1, 2, 3, 4, 5, 6],
        },
        {
            id: 3,
            name: "серый",
            hex: "#858585",
            images: ["/images/1/gray_front.png", "/images/1/gray_back.png"],
            price: "120.00",
            description: 'Описание для "Футболка серый"',
            sizes: [],
        },
    ],
}

const meta: Meta<typeof ProductCard> = {
    title: 'entities/ProductCard',
    component: ProductCard,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Карточка товара в каталоге с выбором цвета, ценой и кнопкой перехода к подробной информации.',
            },
        },
    },
} satisfies Meta<typeof ProductCard>

export default meta
type Story = StoryObj<typeof meta>

export const Карточка_товара: Story = {
    args: {
        product_data: mockProduct,
        default_color_id: 1,
        on_details_click: () => {},
    },
}

export const Нет_в_наличии: Story = {
    args: {
        product_data: mockProduct,
        default_color_id: 3,
        on_details_click: () => {},
    },
}
