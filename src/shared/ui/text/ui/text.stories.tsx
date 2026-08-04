import type { Meta, StoryObj } from '@storybook/react'

import { Text } from './text'

const meta: Meta<typeof Text> = {
	title: 'ui/Text',
	component: Text,
	tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Типографический компонент с набором пресетов для заголовков и основного текста интерфейса.',
            },
        },
    },
} satisfies Meta<typeof Text>

export default meta
type Story = StoryObj<typeof meta>

export const Заголовок_H1: Story = {
	args: {
		children: 'Пример текста сайта',
		as: 'h1',
		typo: 'heading_h1',
	},
}

export const Заголовок_H2: Story = {
	args: {
		children: 'Пример текста сайта',
		as: 'h2',
		typo: 'heading_h2',
	},
}

export const Заголовок_H3: Story = {
	args: {
		children: 'Пример текста сайта',
		as: 'h3',
		typo: 'heading_h3',
	},
}

export const Основной_крупный: Story = {
	args: {
		children: 'Пример текста сайта',
		as: 'p',
		typo: 'primary_lg',
	},
}

export const Основной_средний: Story = {
	args: {
		children: 'Пример текста сайта',
		as: 'p',
		typo: 'primary_md',
	},
}

export const Основной_малый: Story = {
	args: {
		children: 'Пример текста сайта',
		as: 'p',
		typo: 'primary_sm',
	},
}

export const Вторичный_полужирный: Story = {
	args: {
		children: 'Пример текста сайта',
		as: 'p',
		typo: 'secondary_sbold',
	},
}

export const Вторичный_обычный: Story = {
	args: {
		children: 'Пример текста сайта',
		as: 'p',
		typo: 'secondary_reg',
	},
}
