import { Meta, StoryObj } from "@storybook/react";

import {ProductNotFound} from "./product-not-found";

const meta: Meta<typeof ProductNotFound> = {
    title: 'widgets/ProductNotFound',
    component: ProductNotFound,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Экран ошибки при отсутствии товара с ссылкой возврата в каталог.',
            },
        },
    },
} satisfies Meta<typeof ProductNotFound>

export default meta
type Story = StoryObj<typeof meta>

export const Товар_не_найден: Story = {
    args: {},
}
