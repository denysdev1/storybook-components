import { FC, useState } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import canadaSrc from '@/assets/flags/canada.svg';
import unitedStatesSrc from '@/assets/flags/usa.svg';
import europeanUnionSrc from '@/assets/flags/france.svg';
import unitedKingdomSrc from '@/assets/flags/uk.svg';
import chevronDownSmallSrc from '@/assets/icons/chevron-down-small.svg';
import { CurrencyCode, Currency, CurrencyInfo } from '@/types/currency';
import Image from 'next/image';
import { Label } from '../ui/Label';

const CURRENCY_INFO: Record<CurrencyCode, CurrencyInfo> = {
  [CurrencyCode.CANADA]: {
    flagPath: canadaSrc,
    symbol: '$',
  },
  [CurrencyCode.US]: {
    flagPath: unitedStatesSrc,
    symbol: '$',
  },
  [CurrencyCode.FRANCE]: {
    flagPath: europeanUnionSrc,
    symbol: '€',
  },
  [CurrencyCode.UK]: {
    flagPath: unitedKingdomSrc,
    symbol: '£',
  },
};

type CurrencySelectProps = {
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
};

export const CurrencySelect: FC<CurrencySelectProps> = ({
  selectedCurrency,
  onCurrencyChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const options: { label: string; value: CurrencyCode }[] = Object.entries(
    CURRENCY_INFO
  ).map(([code, info]) => ({
    label: `${info.symbol} ${code}`,
    value: code as CurrencyCode,
  }));

  const getCurrencyFlag = (code: CurrencyCode) => (
    <Image
      src={CURRENCY_INFO[code].flagPath}
      alt={code}
      width={21}
      height={15}
    />
  );

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger
        className={`flex justify-center items-center gap-2 text-sm hover:bg-surface-crystal-60 focus:bg-surface-crystal-60 select-none
          transition-colors duration-100 rounded-sm px-2 py-1.5 h-12 ${
            isOpen ? 'bg-surface-crystal' : ''
          }`}
      >
        <Label variant='data' className='flex gap-2'>
          {CURRENCY_INFO[selectedCurrency.code].symbol} {selectedCurrency.code}
          {getCurrencyFlag(selectedCurrency.code)}
        </Label>
        <Image
          src={chevronDownSmallSrc}
          alt='chevron-down'
          width={4}
          height={8}
          className='min-w-4'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map(({ value }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => onCurrencyChange({ code: value })}
            className='justify-center'
          >
            {CURRENCY_INFO[value].symbol} {value}&nbsp;
            {getCurrencyFlag(value)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
