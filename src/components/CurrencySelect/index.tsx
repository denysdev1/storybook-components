import { FC } from 'react';
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
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-2 text-sm hover:bg-accent rounded-sm px-2 py-1.5'>
        <span className='flex gap-2'>
          {CURRENCY_INFO[selectedCurrency.code].symbol} {selectedCurrency.code}
          <Image
            src={CURRENCY_INFO[selectedCurrency.code].flagPath}
            alt={selectedCurrency.code}
            width={21}
            height={15}
          />
        </span>
        <Image
          src={chevronDownSmallSrc}
          alt='chevron-down'
          width={4}
          height={8}
          className='min-w-4 min-h-8'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {Object.entries(CURRENCY_INFO).map(([code, info]) => (
          <DropdownMenuItem
            key={code}
            onClick={() =>
              onCurrencyChange({
                code: code as CurrencyCode,
              })
            }
            className='justify-center'
          >
            {info.symbol} {code}&nbsp;
            <Image src={info.flagPath} alt={code} width={21} height={15} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
