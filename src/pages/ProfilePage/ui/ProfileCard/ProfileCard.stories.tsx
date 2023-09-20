import type { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/assets/tests/storybook.png';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '../../../../entities/Country';
import { Currency } from '../../../../entities/Currency';
import { ProfileCard } from './ProfileCard';

const meta: Meta<typeof ProfileCard> = {
    title: 'pages/ProfileCard',
    component: ProfileCard,
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

export const Primary: Story = {
    args: {
        data: {
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
    decorators: [StoreDecorator({})],
};

export const Loading: Story = {
    args: {
        isLoading: true,
    },
};

export const WithError: Story = {
    args: {
        error: 'true',
    },
};
