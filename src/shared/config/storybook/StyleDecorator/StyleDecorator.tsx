// import { StoryObj } from '@storybook/react'
import { StoryFn } from '@storybook/react';
import 'app/styles/index.scss';

// export const StyleDecorator = (story: () => StoryObj) => story()
export const StyleDecorator = (Story: StoryFn) => <Story />;
