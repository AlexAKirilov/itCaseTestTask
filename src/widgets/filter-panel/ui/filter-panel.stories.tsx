import { Meta, StoryObj } from "@storybook/react";

import {FilterPanel} from "./filter-panel";

const meta: Meta<typeof FilterPanel> = {
    title: 'widgets/FilterPanel',
    component: FilterPanel,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Панель фильтров каталога: сортировка по цене, фильтр наличия и поиск по названию.',
            },
        },
    },
} satisfies Meta<typeof FilterPanel>

export default meta
type Story = StoryObj<typeof meta>

export const По_умолчанию: Story = {
    args: {
        onlyInStock: false,
        onToggleInStock: () => {},
        sortBy: null,
        onSortBy: () => {},
        searchQuery: '',
        onSearchQueryChange: () => {},
    },
}

export const С_активными_фильтрами: Story = {
    args: {
        onlyInStock: true,
        onToggleInStock: () => {},
        sortBy: 'asc',
        onSortBy: () => {},
        searchQuery: 'футболка',
        onSearchQueryChange: () => {},
    },
}
