import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { CurrencySelect } from './index';
import { CurrencyCode, Currency } from '@/types/currency';

const meta = {
  title: 'Components/CurrencySelect',
  component: CurrencySelect,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
A dropdown component for selecting currencies with associated country flags.

## Usage
\`\`\`tsx
<CurrencySelect
  selectedCurrency={{ code: CurrencyCode.FRANCE }}
  onCurrencyChange={(currency) => console.log('Selected currency:', currency)}
/>
\`\`\`

## Features
- Displays currency code with country flag
- Supports multiple currencies (CAD, USD, EUR, GBP)
- Fully keyboard accessible
- Responsive design
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectedCurrency: {
      control: 'object',
      description: 'Currently selected currency configuration',
      table: {
        type: { summary: 'Currency' },
        defaultValue: { summary: '{ code: CurrencyCode.FRANCE }' },
      },
    },
    onCurrencyChange: {
      action: 'currency changed',
      description: 'Callback fired when currency selection changes',
      table: {
        type: { summary: '(currency: Currency) => void' },
      },
    },
  },
  decorators: [
    (Story, { args }) => {
      const [selectedCurrency, setSelectedCurrency] = useState<Currency>({
        code: args.selectedCurrency?.code || CurrencyCode.FRANCE,
      });

      return (
        <Story
          args={{
            ...args,
            selectedCurrency,
            onCurrencyChange: (currency: Currency) => {
              setSelectedCurrency(currency);
              args.onCurrencyChange?.(currency);
            },
          }}
        />
      );
    },
  ],
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    selectedCurrency: {
      code: CurrencyCode.FRANCE,
    },
    onCurrencyChange: () => {},
  },
};

// Interactive example showing currency changes
export const Interactive: Story = {
  args: {
    selectedCurrency: { code: CurrencyCode.FRANCE },
    onCurrencyChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: 'An interactive example showing currency selection behavior.',
      },
    },
  },
  render: function InteractiveStory() {
    const [currency, setCurrency] = useState<Currency>({
      code: CurrencyCode.FRANCE,
    });

    return (
      <div className='flex flex-col items-center gap-4'>
        <CurrencySelect
          selectedCurrency={currency}
          onCurrencyChange={setCurrency}
        />
        <div className='text-sm text-gray-600'>Selected: {currency.code}</div>
      </div>
    );
  },
};
