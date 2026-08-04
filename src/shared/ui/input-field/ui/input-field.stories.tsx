import { Meta, StoryObj } from '@storybook/react'
import { InputField } from './input-field'

const meta: Meta<typeof InputField> = {
    title: 'ui/InputField',
    component: InputField,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Поле ввода для поиска и фильтрации товаров в каталоге.',
            },
        },
    },
}

export default meta
type Story = StoryObj<typeof meta>

export const Поиск: Story = {
    args: {
        placeholder: 'поиск',
    },
}
