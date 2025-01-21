import Image from 'next/image';
import chevronDownSmallSrc from '@/assets/icons/chevron-down-small.svg';
import { Label, LabelVariant } from '../Label';
import { FC, ReactNode } from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../dropdown-menu';
import { cn } from '@/lib/utils';

type DropdownOption = {
  label: string | ReactNode;
  value: string;
};

type DropdownProps = {
  onOptionSelect: (value: string) => void;
  options: DropdownOption[];
  optionClassName?: string;
  triggerIcon?: {
    src: string;
    alt: string;
    width?: number;
    height?: number;
  };
  triggerLabel?: string | ReactNode;
  triggerVariant?: LabelVariant;
  triggerClassName?: string;
  className?: string;
  'aria-label'?: string;
};

export const Dropdown: FC<DropdownProps> = ({
  onOptionSelect,
  options,
  optionClassName = '',
  triggerIcon,
  triggerLabel,
  triggerVariant = 'data',
  triggerClassName = '',
  className = '',
  'aria-label': ariaLabel,
}) => {
  const renderTriggerContent = (): ReactNode => (
    <div className='flex items-center gap-2'>
      {triggerIcon && (
        <Image
          src={triggerIcon.src}
          alt={triggerIcon.alt}
          width={triggerIcon.width ?? 16}
          height={triggerIcon.height ?? 16}
        />
      )}
      {triggerLabel && (
        <Label variant={triggerVariant} className={triggerClassName}>
          {triggerLabel}
        </Label>
      )}
    </div>
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          'flex justify-center items-center gap-2 text-sm',
          'hover:bg-surface-crystal-60 focus:bg-surface-crystal-60',
          'select-none transition-colors duration-100',
          'rounded-sm px-2 py-1.5 h-12',
          className
        )}
        aria-label={ariaLabel}
      >
        {renderTriggerContent()}
        <Image
          src={chevronDownSmallSrc}
          alt='chevron-down'
          width={4}
          height={8}
          className='min-w-4'
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {options.map(({ label, value }) => (
          <DropdownMenuItem
            key={value}
            onClick={() => onOptionSelect(value)}
            className={optionClassName}
          >
            {label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
