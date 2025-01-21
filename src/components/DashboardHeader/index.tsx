'use client';

import Image from 'next/image';
import { FC, useState } from 'react';
import { CurrencySelect } from '@/components/CurrencySelect';
import { Currency, CurrencyCode } from '@/types/currency';
import magnifyingGlassSrc from '@/assets/icons/magnifying-glass.svg';
import { AddDropdown } from '../AddDropdown';

type DashboardHeaderProps = {
  userName: string;
};

export const DashboardHeader: FC<DashboardHeaderProps> = ({ userName }) => {
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
            <div className='flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 select-none'>
              <button
                className='flex items-center justify-center px-3 rounded-[4px] h-12 hover:bg-surface-crystal-60 transition-colors duration-100'
                aria-label='Search'
              >
                <Image
                  src={magnifyingGlassSrc}
                  alt='Search'
                  width={16}
                  height={16}
                  className='min-w-4'
                />
              </button>
              <CurrencySelect
                selectedCurrency={selectedCurrency}
                onCurrencyChange={setSelectedCurrency}
              />
              <AddDropdown />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
