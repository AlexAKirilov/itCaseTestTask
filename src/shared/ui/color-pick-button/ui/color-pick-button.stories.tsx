import type { Meta, StoryObj } from '@storybook/react'

import {ColorPickButton} from "./color-pick-button";

const meta = {
    title: 'ui/ColorPickButton',
    component: ColorPickButton,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Кнопка выбора цвета товара. Показывает доступный цвет и состояние выбора.',
            },
        },
    },
} satisfies Meta<typeof ColorPickButton>

export default meta
type Story = StoryObj<typeof meta>

export const Выбранный_цвет: Story = {
    args: {
        color: '#ffdc00',
        on_click: () => null,
        is_selected: true,
    },
}

export const Недоступный_цвет: Story = {
    args: {
        color: '#ffdc00',
        on_click: () => null,
        is_selected: false,
        disabled: true,
    },
}
