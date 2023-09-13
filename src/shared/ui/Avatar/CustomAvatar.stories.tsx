import type { Meta, StoryObj } from '@storybook/react';
import { CustomAvatar } from './CustomAvatar';
import AvatarImg from './storybook.png';

const meta: Meta<typeof CustomAvatar> = {
    title: 'shared/CustomAvatar',
    component: CustomAvatar,
};

export default meta;
type Story = StoryObj<typeof CustomAvatar>;

export const Primary: Story = {
    args: {
        size: 150,
        src: AvatarImg,
    },
};

export const Small: Story = {
    args: {
        size: 50,
        src: AvatarImg,
    },
};
