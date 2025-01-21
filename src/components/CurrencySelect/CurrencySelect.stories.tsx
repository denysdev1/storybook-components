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
A currency selection dropdown component that displays currency codes with their corresponding country flags.

## Features
- Displays currency code with associated country flag
- Supports multiple currencies (CAD, USD, EUR, GBP)
- Fully keyboard accessible
- Responsive design
- Maintains selected state

## Usage
\`\`\`tsx
const [currency, setCurrency] = useState<Currency>({ 
  code: CurrencyCode.FRANCE 
});

<CurrencySelect
  selectedCurrency={currency}
  onCurrencyChange={setCurrency}
/>
\`\`\`
`,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    selectedCurrency: {
      control: 'object',
      description: 'The currently selected currency',
      table: {
        type: { summary: 'Currency' },
        defaultValue: { summary: '{ code: CurrencyCode.FRANCE }' },
      },
    },
    onCurrencyChange: {
      action: 'currency changed',
      description: 'Callback triggered when currency selection changes',
      table: {
        type: { summary: '(currency: Currency) => void' },
      },
    },
  },
} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base story with controlled state
const CurrencySelectWithState = ({
  initialCurrency = CurrencyCode.FRANCE,
  showSelected = false,
}: {
  initialCurrency?: CurrencyCode;
  showSelected?: boolean;
}) => {
  const [currency, setCurrency] = useState<Currency>({
    code: initialCurrency,
  });

  return (
    <div className='flex flex-col items-center gap-4'>
      <CurrencySelect
        selectedCurrency={currency}
        onCurrencyChange={setCurrency}
      />
      {showSelected && (
        <div className='text-sm text-gray-600'>Selected: {currency.code}</div>
      )}
    </div>
  );
};

export const Default: Story = {
  render: () => <CurrencySelectWithState />,
  args: {
    selectedCurrency: { code: CurrencyCode.FRANCE },
    onCurrencyChange: () => {},
  },
};

export const WithUSDPreselected: Story = {
  render: () => <CurrencySelectWithState initialCurrency={CurrencyCode.US} />,
  parameters: {
    docs: {
      description: {
        story: 'CurrencySelect initialized with USD as the default currency.',
      },
    },
  },
  args: {
    selectedCurrency: { code: CurrencyCode.US },
    onCurrencyChange: () => {},
  },
};

export const Interactive: Story = {
  render: () => <CurrencySelectWithState showSelected={true} />,
  parameters: {
    docs: {
      description: {
        story:
          'An interactive example showing the selected currency value updating in real-time.',
      },
    },
  },
  args: {
    selectedCurrency: { code: CurrencyCode.US },
    onCurrencyChange: () => {},
  },
};
