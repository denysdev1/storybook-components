import { render, screen } from '@testing-library/react';
import { Avatar } from './index';
import { expect } from 'vitest';
import '@testing-library/jest-dom/vitest';

describe('Avatar', () => {
  it('renders fallback text when no image source provided', () => {
    render(<Avatar fallbackText='JD' />);
    expect(screen.getByText('JD')).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(<Avatar size='xs' fallbackText='JD' />);
    expect(screen.getByText('JD').parentElement).toHaveClass('size-8');

    rerender(<Avatar size='sm' fallbackText='JD' />);
    expect(screen.getByText('JD').parentElement).toHaveClass('size-10');

    rerender(<Avatar size='xl' fallbackText='JD' />);
    expect(screen.getByText('JD').parentElement).toHaveClass('size-12');
  });

  it('applies correct rounded corner classes', () => {
    const { rerender } = render(<Avatar size='xs' fallbackText='JD' />);
    expect(screen.getByText('JD').parentElement).toHaveClass('rounded-sm');

    rerender(<Avatar size='sm' fallbackText='JD' />);
    expect(screen.getByText('JD').parentElement).toHaveClass('rounded-md');
  });

  it('applies custom className props', () => {
    render(
      <Avatar
        fallbackText='JD'
        rootClassName='test-root'
        fallbackClassName='test-fallback'
      />
    );

    const fallback = screen.getByText('JD');
    const root = fallback.parentElement;

    expect(root).toHaveClass('test-root');
    expect(fallback).toHaveClass('test-fallback');
  });
});
