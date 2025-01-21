import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Dropdown } from './index';
import circlePlusSrc from '@/assets/icons/circle-plus.svg';

const meta: Meta<typeof Dropdown> = {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onOptionSelect: {
      description: 'Callback fired when an option is selected',
      action: 'option selected',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const mockOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const handleOptionSelect = (value: string) => {
  action('onOptionSelect')(value);
};

export const Default: Story = {
  args: {
    options: mockOptions,
    triggerLabel: 'Select Option',
    onOptionSelect: handleOptionSelect,
  },
};

export const WithLabel: Story = {
  args: {
    options: mockOptions,
    triggerLabel: 'Select Option',
    onOptionSelect: handleOptionSelect,
  },
};

export const WithIcon: Story = {
  args: {
    options: mockOptions,
    triggerIcon: {
      src: circlePlusSrc,
      alt: 'Add',
      width: 16,
      height: 16,
    },
    onOptionSelect: handleOptionSelect,
  },
};

export const WithIconAndLabel: Story = {
  args: {
    options: mockOptions,
    triggerIcon: {
      src: circlePlusSrc,
      alt: 'Add',
      width: 16,
      height: 16,
    },
    triggerLabel: 'Add New',
    onOptionSelect: handleOptionSelect,
  },
};

export const CustomClassName: Story = {
  args: {
    options: mockOptions,
    triggerLabel: 'Custom Style',
    triggerVariant: 'lg',
    triggerClassName: 'text-obsidian italic',
    onOptionSelect: handleOptionSelect,
  },
};
