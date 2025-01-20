import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { CurrencySelect } from './index';
import { CurrencyCode } from '@/types/currency';

describe('CurrencySelect', () => {
  const defaultProps = {
    selectedCurrency: { code: CurrencyCode.FRANCE },
    onCurrencyChange: vi.fn(),
  };

  it('renders selected currency with correct symbol and code', () => {
    render(<CurrencySelect {...defaultProps} />);

    const trigger = screen.getByRole('button');
    expect(trigger).toHaveTextContent('€ EUR');
    expect(screen.getByAltText('EUR')).toBeInTheDocument();
  });

  it('renders trigger button with chevron', () => {
    render(<CurrencySelect {...defaultProps} />);

    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();
    expect(screen.getByAltText('chevron-down')).toBeInTheDocument();
  });

  it('has correct accessibility attributes', () => {
    render(<CurrencySelect {...defaultProps} />);

    const trigger = screen.getByRole('button');
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu');
    expect(trigger).toHaveAttribute('aria-expanded', 'false');
  });
});
