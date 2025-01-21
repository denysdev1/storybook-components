import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { DashboardHeader } from './index';

describe('DashboardHeader', () => {
  const defaultProps = {
    userName: 'John Doe',
  };

  it('renders welcome message with user name', () => {
    render(<DashboardHeader {...defaultProps} />);
    expect(screen.getByText(/Welcome John Doe,/)).toBeInTheDocument();
  });

  it('renders CurrencySelect with default currency', () => {
    render(<DashboardHeader {...defaultProps} />);

    // Check if CurrencySelect is rendered with default Canadian currency
    expect(screen.getByRole('button', { name: /CAD/i })).toBeInTheDocument();
  });

  it('renders with correct responsive classes', () => {
    render(<DashboardHeader {...defaultProps} />);

    const header = screen.getByRole('banner');
    expect(header).toHaveClass(
      'w-full',
      'mx-auto',
      'p-4',
      'sm:p-10',
      'bg-surface-pearl'
    );

    const welcomeText = screen.getByText(/Welcome John Doe,/);
    expect(welcomeText).toHaveClass('text-obsidian', 'text-xl', 'sm:text-2xl');
  });

  it('maintains layout structure', () => {
    render(<DashboardHeader {...defaultProps} />);

    const header = screen.getByRole('banner');
    const container = header.firstElementChild;

    expect(container).toHaveClass('max-w-screen-2xl', 'mx-auto');
    expect(container?.firstElementChild).toHaveClass('flex', 'flex-col');
  });
});
