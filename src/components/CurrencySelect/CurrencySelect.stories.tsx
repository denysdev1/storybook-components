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
        component:
          'A dropdown component for selecting countries and their associated currencies.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectedCurrency: {
      control: 'object',
      description: 'Currently selected country and its currency',
      table: {
        type: { summary: 'Currency' },
      },
    },
    onCurrencyChange: {
      action: 'currency changed',
      description: 'Callback fired when country/currency selection changes',
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

export const WithUnitedKingdom: Story = {
  args: {
    selectedCurrency: {
      code: CurrencyCode.UK,
    },
    onCurrencyChange: () => {},
  },
};
