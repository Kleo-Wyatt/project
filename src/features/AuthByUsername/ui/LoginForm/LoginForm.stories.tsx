import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: '123' },
        }),
    ],
};

export const Error: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: '123', error: 'ERROR' },
        }),
    ],
};

export const Loading: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { isLoading: true },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            loginForm: { username: '123', password: '123' },
        }),
        ThemeDecorator(Theme.DARK),
    ],
};
