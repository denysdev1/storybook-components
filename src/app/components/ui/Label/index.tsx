import { ElementType, FC } from 'react';

export type LabelVariant = 'lg' | 'data' | 'section' | 'xsmall' | 'graph';

export type LabelProps = {
  children: React.ReactNode;
  variant: LabelVariant;
  className?: string;
  as?: ElementType;
};

const variantStyles: Record<LabelVariant, string> = {
  lg: 'text-2xl/[24px] text-obsidian tracking-[0.01em] font-medium',
  data: 'text-base/[16px] text-obsidian font-medium',
  section: 'text-base/[18px] text-light-text font-medium',
  xsmall: 'text-xs/[14px] text-obsidian font-medium',
  graph: 'text-xs/[15.6px] text-light-text',
} as const;

export const Label: FC<LabelProps> = ({ children, variant, className, as }) => {
  const Component = as || 'span';

  return (
    <Component className={`${variantStyles[variant]} ${className ?? ''}`}>
      {children}
    </Component>
  );
};
