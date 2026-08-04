import { Meta, StoryObj } from '@storybook/react-webpack5'
import { ArrowButton } from './arrow-button'

const meta: Meta<typeof ArrowButton> = {
	title: 'ui/ArrowButton',
	component: ArrowButton,
	tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Кнопка переключения изображений товара вперёд и назад.',
            },
        },
    },
} satisfies Meta<typeof ArrowButton>

export default meta
type Story = StoryObj<typeof meta>

export const Следующее_изображение: Story = {
	args: {
		buttonDirection: 'toNext',
	},
}

export const Предыдущее_изображение: Story = {
	args: {
		buttonDirection: 'toPrevious',
	},
}
