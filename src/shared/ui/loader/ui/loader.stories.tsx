import {Meta, StoryObj} from "@storybook/react";
import {Loader} from "./loader";

const meta: Meta<typeof Loader> = {
    title: 'ui/Loader',
    component: Loader,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Индикатор загрузки, отображается во время получения данных с сервера.',
            },
        },
    },
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const По_умолчанию: Story = {
    args: {},
}
