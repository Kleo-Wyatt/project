import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Light: Story = {
  args: {},
}

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.DARK)],
}
