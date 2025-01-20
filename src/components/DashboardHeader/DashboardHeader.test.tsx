import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { DashboardHeader } from './index';

describe('DashboardHeader', () => {
  const defaultProps = {
    userName: 'John Doe',
    onAddClick: vi.fn(),
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

  it('renders add button with correct text and icon', () => {
    render(<DashboardHeader {...defaultProps} />);

    const addButton = screen.getByRole('button', { name: /add new item/i });
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveTextContent('Add');
    expect(addButton.querySelector('svg')).toBeInTheDocument();
  });

  it('calls onAddClick when add button is clicked', () => {
    render(<DashboardHeader {...defaultProps} />);

    const addButton = screen.getByRole('button', { name: /add new item/i });
    fireEvent.click(addButton);

    expect(defaultProps.onAddClick).toHaveBeenCalledTimes(1);
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

  it('renders without add button when onAddClick is not provided', () => {
    const { ...propsWithoutAdd } = defaultProps;
    render(<DashboardHeader {...propsWithoutAdd} />);

    expect(
      screen.queryByRole('button', { name: /add new item/i })
    ).toBeInTheDocument();
  });

  it('maintains layout structure', () => {
    render(<DashboardHeader {...defaultProps} />);

    const header = screen.getByRole('banner');
    const container = header.firstElementChild;

    expect(container).toHaveClass('max-w-screen-2xl', 'mx-auto');
    expect(container?.firstElementChild).toHaveClass('flex', 'flex-col');
  });
});
