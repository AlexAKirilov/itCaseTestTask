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
        only_in_stock: false,
        on_toggle_in_stock: () => {},
        sort_by: null,
        on_sort_by: () => {},
        search_query: '',
        on_search_query_change: () => {},
    },
}

export const С_активными_фильтрами: Story = {
    args: {
        only_in_stock: true,
        on_toggle_in_stock: () => {},
        sort_by: 'asc',
        on_sort_by: () => {},
        search_query: 'футболка',
        on_search_query_change: () => {},
    },
}
