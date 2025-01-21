import Image from 'next/image';
import chevronDownSmallSrc from '@/assets/icons/chevron-down-small.svg';
import circlePlusSrc from '@/assets/icons/circle-plus.svg';
import { Label } from '../ui/Label';
import { FC } from 'react';

type AddDropdownProps = {
  onAddClick: () => void;
};

export const AddDropdown: FC<AddDropdownProps> = ({ onAddClick }) => {
  return (
    <button
      className='flex items-center justify-center gap-1 text-sm
    py-3 px-4 rounded-[4px] h-12 hover:bg-surface-crystal-60 transition-colors duration-100'
      onClick={onAddClick}
      aria-label='Add new item'
    >
      <div className='flex items-center gap-2'>
        <Image src={circlePlusSrc} alt='circle-plus' width={16} height={16} />
        <Label variant='data'>Add</Label>
      </div>
      <Image
        src={chevronDownSmallSrc}
        alt='chevron-down'
        width={4}
        height={8}
        className='min-w-4'
      />
    </button>
  );
};
