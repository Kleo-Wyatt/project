import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import avatar from 'shared/assets/tests/storybook.png';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from '../../../entities/Country';
import { Currency } from '../../../entities/Currency';
import ProfilePage from './ProfilePage';

const meta: Meta<typeof ProfilePage> = {
    title: 'pages/ProfilePage',
    component: ProfilePage,
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

export const Light: Story = {
    args: {},
    decorators: [
        StoreDecorator({
            profile: {
                form: {
                    first: 'Victoria',
                    lastname: 'Ilchenko',
                    age: 31,
                    currency: Currency.RUB,
                    country: Country.Russia,
                    city: 'Moscow',
                    username: 'Nestea483',
                    avatar,
                },
            },
        }),
    ],
};

export const Dark: Story = {
    args: {},
    decorators: [
        ThemeDecorator(Theme.DARK),
        StoreDecorator({
            profile: {
                form: {
                    first: 'Victoria',
                    lastname: 'Ilchenko',
                    age: 31,
                    currency: Currency.RUB,
                    country: Country.Russia,
                    city: 'Moscow',
                    username: 'Nestea483',
                    avatar,
                },
            },
        }),
    ],
};
