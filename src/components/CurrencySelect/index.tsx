import { FC } from 'react';
import { Dropdown } from '@/components/ui/Dropdown';
import canadaSrc from '@/assets/flags/canada.svg';
import unitedStatesSrc from '@/assets/flags/usa.svg';
import europeanUnionSrc from '@/assets/flags/france.svg';
import unitedKingdomSrc from '@/assets/flags/uk.svg';
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

const getCurrencyFlag = (code: CurrencyCode) => (
  <Image src={CURRENCY_INFO[code].flagPath} alt={code} width={21} height={15} />
);

const formatCurrencyOption = (code: CurrencyCode) => (
  <div className='flex items-center gap-2'>
    <span>
      {CURRENCY_INFO[code].symbol} {code}
    </span>
    {getCurrencyFlag(code)}
  </div>
);

export const CurrencySelect: FC<CurrencySelectProps> = ({
  selectedCurrency,
  onCurrencyChange,
}) => {
  const options = Object.keys(CURRENCY_INFO).map((code) => ({
    label: formatCurrencyOption(code as CurrencyCode),
    value: code,
  }));

  const handleCurrencyChange = (value: string) => {
    onCurrencyChange({ code: value as CurrencyCode });
  };

  return (
    <Dropdown
      options={options}
      onOptionSelect={handleCurrencyChange}
      triggerLabel={formatCurrencyOption(selectedCurrency.code)}
      optionClassName='justify-center'
    />
  );
};
