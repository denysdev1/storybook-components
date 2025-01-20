import type { Meta, StoryObj } from '@storybook/react';
import { TextContent } from './index';

const meta = {
  title: 'UI/TextContent',
  component: TextContent,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A flexible text component that supports different sizes and HTML elements.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xl', 'lg', 'md', 'sm'],
      description: 'Controls the text size and line height',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    as: {
      control: 'select',
      options: ['span', 'div', 'p'],
      description: 'The HTML element to render',
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    children: {
      control: 'text',
      description: 'The content to display',
    },
  },
} satisfies Meta<typeof TextContent>;

export default meta;

type Story = StoryObj<typeof TextContent>;

export const Playground: Story = {
  args: {
    size: 'md',
    children: 'Example text content',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className='space-y-4'>
      <TextContent size='xl'>Extra Large Text (xl)</TextContent>
      <TextContent size='lg'>Large Text (lg)</TextContent>
      <TextContent size='md'>Medium Text (md)</TextContent>
      <TextContent size='sm'>Small Text (sm)</TextContent>
    </div>
  ),
};

export const WithCustomStyling: Story = {
  args: {
    size: 'md',
    className: 'italic text-blue-600 font-semibold',
    children: 'Custom styled text',
  },
};

export const AsHTMLElements: Story = {
  render: () => (
    <div className='space-y-4'>
      <TextContent size='md' as='p'>
        As paragraph
      </TextContent>
      <TextContent size='md' as='span'>
        As span
      </TextContent>
      <TextContent size='md' as='div'>
        As div
      </TextContent>
    </div>
  ),
};
