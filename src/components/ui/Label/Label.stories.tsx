import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './index';

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['lg', 'data', 'section', 'xsmall', 'graph'],
    },
    as: {
      control: 'select',
      options: [
        'span',
        'div',
        'label',
        'p',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
      ],
    },
    className: {
      control: 'text',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;

type Story = StoryObj<typeof Label>;

export const Large: Story = {
  args: {
    variant: 'lg',
    children: 'Large Label Text',
  },
};

export const Data: Story = {
  args: {
    variant: 'data',
    children: 'Data Label Text',
  },
};

export const Section: Story = {
  args: {
    variant: 'section',
    children: 'Section Label Text',
  },
};

export const ExtraSmall: Story = {
  args: {
    variant: 'xsmall',
    children: 'Extra Small Label Text',
  },
};

export const Graph: Story = {
  args: {
    variant: 'graph',
    children: 'Graph Label Text',
  },
};

export const CustomElement: Story = {
  args: {
    variant: 'lg',
    as: 'h1',
    children: 'Custom Element (H1) Label',
  },
};

export const WithCustomClass: Story = {
  args: {
    variant: 'lg',
    className: 'italic underline',
    children: 'Label with Custom Classes',
  },
};
