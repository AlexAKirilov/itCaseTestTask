import { Meta, StoryObj } from "@storybook/react";

import {Header} from "./header";

const meta: Meta<typeof Header> = {
    title: 'widgets/Header',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Шапка сайта с навигацией по каталогу и корзине. В корзине отображаются количество товаров и итоговая сумма.',
            },
        },
    },
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const По_умолчанию: Story = {
    args: {},
}
