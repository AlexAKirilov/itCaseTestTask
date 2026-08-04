import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './button'

const meta = {
    title: 'ui/Button',
    component: Button,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Кнопка с основными и вторичными стилями. Используется для действий пользователя на страницах каталога, карточки товара и корзины.',
            },
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Активная: Story = {
    args: {
        children: 'ПРИЗЫВ К ДЕЙСТВИЮ',
    },
}

export const Неактивная: Story = {
    args: {
        children: 'ПРИЗЫВ К ДЕЙСТВИЮ',
        disabled: true,
    },
}
