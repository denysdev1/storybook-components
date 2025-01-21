import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './index';
import { expect, vi } from 'vitest';
import '@testing-library/jest-dom/vitest';

const mockOptions = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
];

const mockIcon = {
  src: '/mock-icon.svg',
  alt: 'Mock Icon',
  width: 16,
  height: 16,
};

describe('Dropdown', () => {
  const mockOnOptionSelect = vi.fn();

  beforeEach(() => {
    mockOnOptionSelect.mockClear();
  });

  it('renders trigger with label correctly', () => {
    render(
      <Dropdown
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
        triggerLabel='Select Option'
      />
    );

    expect(screen.getByText('Select Option')).toBeInTheDocument();
  });

  it('renders trigger with icon correctly', () => {
    render(
      <Dropdown
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
        triggerIcon={mockIcon}
      />
    );

    expect(screen.getByAltText('Mock Icon')).toBeInTheDocument();
  });

  it('renders trigger with both icon and label', () => {
    render(
      <Dropdown
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
        triggerIcon={mockIcon}
        triggerLabel='Select Option'
      />
    );

    expect(screen.getByAltText('Mock Icon')).toBeInTheDocument();
    expect(screen.getByText('Select Option')).toBeInTheDocument();
  });

  it('applies custom className to trigger', () => {
    render(
      <Dropdown
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
        triggerLabel='Select Option'
        className='custom-class'
      />
    );

    expect(screen.getByRole('button')).toHaveClass('custom-class');
  });

  it('applies custom triggerClassName to label', () => {
    render(
      <Dropdown
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
        triggerLabel='Select Option'
        triggerClassName='custom-trigger-class'
      />
    );

    expect(screen.getByText('Select Option')).toHaveClass(
      'custom-trigger-class'
    );
  });

  it('shows options when clicked and calls onOptionSelect when option is selected', async () => {
    const user = userEvent.setup();

    render(
      <Dropdown
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
        triggerLabel='Select Option'
      />
    );

    await user.click(screen.getByRole('button'));

    expect(screen.getByText('Option 1')).toBeInTheDocument();
    expect(screen.getByText('Option 2')).toBeInTheDocument();
    expect(screen.getByText('Option 3')).toBeInTheDocument();

    await user.click(screen.getByText('Option 2'));

    expect(mockOnOptionSelect).toHaveBeenCalledWith('option2');
  });

  it('renders with correct aria-label', () => {
    render(
      <Dropdown
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
        triggerLabel='Select Option'
        aria-label='Custom Dropdown'
      />
    );

    expect(screen.getByRole('button')).toHaveAttribute(
      'aria-label',
      'Custom Dropdown'
    );
  });
});
