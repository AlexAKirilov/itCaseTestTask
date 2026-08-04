import { Meta, StoryObj } from "@storybook/react";

import {ProductList} from "./product-list";

const meta: Meta<typeof ProductList> = {
    title: 'widgets/ProductList',
    component: ProductList,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Список товаров каталога с поддержкой фильтрации, сортировки и поиска.',
            },
        },
    },
} satisfies Meta<typeof ProductList>

export default meta
type Story = StoryObj<typeof meta>

export const Каталог: Story = {
    args: {},
}

export const Только_в_наличии: Story = {
    args: {
        only_in_stock: true,
    },
}

export const Сортировка_по_цене: Story = {
    args: {
        sort_by: 'asc',
    },
}
