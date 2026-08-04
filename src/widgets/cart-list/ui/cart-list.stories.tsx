import { Meta, StoryObj } from "@storybook/react";

import {CartList} from "./cart-list";
import {storageService} from "@/shared/lib/local-storage/storage-service";

const mockCart = [
    {
        product_id: 1,
        color_id: 1,
        size_id: 2,
        quantity: 1,
        product_name: "Футболка",
        brand: "Basic Club",
        color_name: "черный",
        color_hex: "#000000",
        size_name: "S",
        price: "123.00",
        image: "/images/1/black_front.png",
    },
]

const meta: Meta<typeof CartList> = {
    title: 'widgets/CartList',
    component: CartList,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Список позиций корзины с итоговой суммой по всем товарам.',
            },
        },
    },
    decorators: [
        (Story) => {
            storageService.set('cart', mockCart)
            return <Story />
        },
    ],
} satisfies Meta<typeof CartList>

export default meta
type Story = StoryObj<typeof meta>

export const Корзина_с_товарами: Story = {
    args: {},
}
