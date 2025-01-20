import type { FC, ReactNode } from 'react';

type TextContentSize = 'xl' | 'lg' | 'md' | 'sm';

const sizes: Record<TextContentSize, string> = {
  xl: 'text-xl/10 font-extralight',
  lg: 'text-lg/8 font-extralight',
  md: 'text-base font-light',
  sm: 'text-sm/4 font-normal',
} as const;

type TextContentProps = {
  children: ReactNode;
  size: TextContentSize;
  className?: string;
  as?: 'span' | 'div' | 'p';
};

export const TextContent: FC<TextContentProps> = ({
  children,
  size,
  className,
  as: Component = 'div',
}) => {
  return (
    <Component
      className={`${sizes[size]} text-obsidian tracking-[0.01em] ${className}`}
    >
      {children}
    </Component>
  );
};
