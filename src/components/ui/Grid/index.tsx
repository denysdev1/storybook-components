import type { FC, ReactNode } from 'react';
import type { JSX } from 'react';

type GridProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export const Grid: FC<GridProps> = ({
  children,
  className = '',
  as: Component = 'div',
}) => {
  return (
    <Component
      className={`
        mx-6 px-5 grid grid-cols-6 gap-x-4
        md:grid-cols-12 md:gap-x-6
        ${className}
      `}
    >
      {children}
    </Component>
  );
};
