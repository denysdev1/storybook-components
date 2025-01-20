import type { Meta, StoryObj } from '@storybook/react';
import { TextContent } from './index';

const meta = {
  title: 'UI/TextContent',
  component: TextContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm'],
    },
    as: {
      control: 'select',
      options: ['span', 'div', 'p'],
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof TextContent>;

export default meta;

type Story = StoryObj<typeof TextContent>;

export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    children: 'Extra Large Text Content',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Text Content',
  },
};

export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Medium Text Content',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small Text Content',
  },
};

export const CustomElement: Story = {
  args: {
    size: 'md',
    as: 'p',
    children: 'Text Content as paragraph element',
  },
};

export const WithCustomClass: Story = {
  args: {
    size: 'md',
    className: 'italic underline',
    children: 'Text Content with custom styling',
  },
};

export const MultilineContent: Story = {
  args: {
    size: 'md',
    children: `This is a longer piece of text content that spans multiple lines.
    It demonstrates how the component handles line breaks and longer content blocks.
    The line height settings ensure proper readability.`,
  },
};
