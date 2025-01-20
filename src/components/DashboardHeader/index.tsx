'use client';

import { FC, useState } from 'react';
import { CurrencySelect } from '@/components/CurrencySelect';
import { Currency, CurrencyCode } from '@/types/currency';

type DashboardHeaderProps = {
  userName: string;
  onAddClick?: () => void;
};

const AddIcon: FC = () => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 16 16'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    className='text-gray-600'
    aria-hidden='true'
  >
    <path
      d='M8 3.33334V12.6667'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
    <path
      d='M3.33331 8H12.6666'
      stroke='currentColor'
      strokeWidth='1.5'
      strokeLinecap='round'
    />
  </svg>
);

export const DashboardHeader: FC<DashboardHeaderProps> = ({
  userName,
  onAddClick,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<Currency>({
    code: CurrencyCode.CANADA,
  });

  return (
    <header
      className='w-full mx-auto p-4 sm:p-10 bg-surface-pearl'
      role='banner'
    >
      <div className='max-w-screen-2xl mx-auto'>
        <div className='flex flex-col gap-4 sm:gap-10'>
          <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0'>
            <h2 className='text-obsidian text-xl sm:text-2xl'>
              Welcome {userName},
            </h2>
            <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5'>
              <CurrencySelect
                selectedCurrency={selectedCurrency}
                onCurrencyChange={setSelectedCurrency}
              />
              <button
                className='flex items-center justify-center gap-2 text-sm py-2 sm:py-0'
                onClick={onAddClick}
                aria-label='Add new item'
              >
                <AddIcon />
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
