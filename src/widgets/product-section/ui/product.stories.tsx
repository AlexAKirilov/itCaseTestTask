import { Meta, StoryObj } from "@storybook/react";

import {Product} from "./product";

const meta: Meta<typeof Product> = {
    title: 'widgets/Product',
    component: Product,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Страница товара с выбором цвета, размера и добавлением в корзину.',
            },
        },
    },
} satisfies Meta<typeof Product>

export default meta
type Story = StoryObj<typeof meta>

export const Страница_товара: Story = {
    args: {
        product_id: 1,
        default_color_id: 1,
    },
}
