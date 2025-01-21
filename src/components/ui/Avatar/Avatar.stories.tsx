import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './index';

const meta: Meta<typeof Avatar> = {
  title: 'UI/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'xl'],
      description: 'Size variant of the avatar',
    },
    src: {
      control: 'text',
      description: 'URL of the avatar image',
    },
    fallbackText: {
      control: 'text',
      description: 'Text to display when image fails to load',
    },
    rootClassName: {
      control: 'text',
      description: 'Additional classes for the root element',
    },
    imageClassName: {
      control: 'text',
      description: 'Additional classes for the image element',
    },
    fallbackClassName: {
      control: 'text',
      description: 'Additional classes for the fallback element',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    size: 'sm',
    fallbackText: 'JD',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className='flex items-center gap-4'>
      <Avatar size='xs' src='https://github.com/shadcn.png' fallbackText='XS' />
      <Avatar size='sm' src='https://github.com/shadcn.png' fallbackText='SM' />
      <Avatar size='xl' src='https://github.com/shadcn.png' fallbackText='XL' />
    </div>
  ),
};

export const WithFallback: Story = {
  args: {
    src: 'invalid-image-url',
    size: 'sm',
    fallbackText: 'JD',
  },
};

export const CustomStyles: Story = {
  args: {
    src: 'https://github.com/shadcn.png',
    size: 'sm',
    fallbackText: 'JD',
    rootClassName: 'border-2 border-primary',
    imageClassName: 'grayscale',
    fallbackClassName: 'bg-primary text-white',
  },
};
