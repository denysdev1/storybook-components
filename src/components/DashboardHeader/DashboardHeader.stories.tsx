import type { Meta, StoryObj } from '@storybook/react';
import { DashboardHeader } from './index';

const meta = {
  title: 'Components/DashboardHeader',
  component: DashboardHeader,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A header component for dashboard pages that displays a welcome message, currency selector, and add button.

## Usage
\`\`\`tsx
<DashboardHeader
  userName="John Doe"
  onAddClick={() => console.log('Add button clicked')}
/>
\`\`\`

## Features
- Displays personalized welcome message
- Integrated currency selector
- Add button with icon
- Responsive design
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    userName: {
      control: 'text',
      description: 'Name of the user to display in welcome message',
      table: {
        type: { summary: 'string' },
      },
    },
    onAddClick: {
      action: 'add clicked',
      description: 'Callback fired when add button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
  },
} satisfies Meta<typeof DashboardHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    userName: 'John Doe',
  },
};

export const LongUserName: Story = {
  args: {
    userName: 'Alexandra Christina Victoria Schleswig-Holstein',
  },
};

export const Interactive: Story = {
  args: {
    userName: 'John Doe',
  },
  parameters: {
    docs: {
      description: {
        story: 'An interactive example showing header interactions.',
      },
    },
  },
};

export const MobileView: Story = {
  args: {
    userName: 'John Doe',
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
