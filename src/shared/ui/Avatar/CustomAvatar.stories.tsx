import type { Meta, StoryObj } from '@storybook/react';
import avatar from 'shared/assets/tests/storybook.png';
import { CustomAvatar } from './CustomAvatar';

const meta: Meta<typeof CustomAvatar> = {
    title: 'shared/CustomAvatar',
    component: CustomAvatar,
};

export default meta;
type Story = StoryObj<typeof CustomAvatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: avatar,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: avatar,
    },
};
