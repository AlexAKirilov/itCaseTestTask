import { Meta, StoryObj } from '@storybook/react-webpack5'

import { Toggle } from './toggle'

const meta: Meta<typeof Toggle> = {
	title: 'ui/Toggle',
	component: Toggle,
	tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Переключатель фильтра «в наличии» на странице каталога.',
            },
        },
    },
} satisfies Meta<typeof Toggle>

export default meta
type Story = StoryObj<typeof meta>

export const Фильтр_наличия: Story = {
	args: {
		text: 'В наличии',
		classname: ['toggle', 'toggle-btn'],
	},
}
