import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
    args: {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat eros et odio tristique, sit amet imperdiet metus mattis. Phasellus non tellus risus. Fusce ornare, tortor et feugiat pretium, urna eros egestas sem, eget volutpat libero turpis efficitur libero. Maecenas purus lorem, elementum sed massa eget, feugiat consectetur nunc. Curabitur tincidunt tortor a blandit convallis. Nulla ornare lectus gravida ipsum euismod malesuada. Nullam dapibus dapibus odio vel sagittis',
    },
};

export const Error: Story = {
    args: {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat eros et odio tristique, sit amet imperdiet metus mattis. Phasellus non tellus risus. Fusce ornare, tortor et feugiat pretium, urna eros egestas sem, eget volutpat libero turpis efficitur libero. Maecenas purus lorem, elementum sed massa eget, feugiat consectetur nunc. Curabitur tincidunt tortor a blandit convallis. Nulla ornare lectus gravida ipsum euismod malesuada. Nullam dapibus dapibus odio vel sagittis',
        theme: TextTheme.ERROR,
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Lorem Ipsum',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat eros et odio tristique, sit amet imperdiet metus mattis. Phasellus non tellus risus. Fusce ornare, tortor et feugiat pretium, urna eros egestas sem, eget volutpat libero turpis efficitur libero. Maecenas purus lorem, elementum sed massa eget, feugiat consectetur nunc. Curabitur tincidunt tortor a blandit convallis. Nulla ornare lectus gravida ipsum euismod malesuada. Nullam dapibus dapibus odio vel sagittis',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Lorem Ipsum',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat eros et odio tristique, sit amet imperdiet metus mattis. Phasellus non tellus risus. Fusce ornare, tortor et feugiat pretium, urna eros egestas sem, eget volutpat libero turpis efficitur libero. Maecenas purus lorem, elementum sed massa eget, feugiat consectetur nunc. Curabitur tincidunt tortor a blandit convallis. Nulla ornare lectus gravida ipsum euismod malesuada. Nullam dapibus dapibus odio vel sagittis',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
    args: {
        title: 'Lorem Ipsum',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
    args: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat eros et odio tristique, sit amet imperdiet metus mattis. Phasellus non tellus risus. Fusce ornare, tortor et feugiat pretium, urna eros egestas sem, eget volutpat libero turpis efficitur libero. Maecenas purus lorem, elementum sed massa eget, feugiat consectetur nunc. Curabitur tincidunt tortor a blandit convallis. Nulla ornare lectus gravida ipsum euismod malesuada. Nullam dapibus dapibus odio vel sagittis',
    },
    decorators: [ThemeDecorator(Theme.DARK)],
};
