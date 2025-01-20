import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { TextContent } from './index';

describe('TextContent', () => {
  it('renders children correctly', () => {
    render(<TextContent size='md'>Test Content</TextContent>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies correct size classes', () => {
    const { rerender } = render(
      <TextContent size='xl'>Extra Large</TextContent>
    );
    expect(screen.getByText('Extra Large')).toHaveClass('text-xl/10');

    rerender(<TextContent size='sm'>Small</TextContent>);
    expect(screen.getByText('Small')).toHaveClass('text-sm/4');
  });

  it('renders as different HTML elements', () => {
    const { rerender } = render(
      <TextContent size='md' as='p'>
        Paragraph
      </TextContent>
    );
    expect(screen.getByText('Paragraph').tagName).toBe('P');

    rerender(
      <TextContent size='md' as='span'>
        Span
      </TextContent>
    );
    expect(screen.getByText('Span').tagName).toBe('SPAN');
  });

  it('applies custom className correctly', () => {
    render(
      <TextContent size='md' className='custom-class'>
        Custom Styled
      </TextContent>
    );
    expect(screen.getByText('Custom Styled')).toHaveClass('custom-class');
  });

  it('maintains base styling with custom classes', () => {
    render(
      <TextContent size='md' className='italic'>
        Base Style Test
      </TextContent>
    );
    const element = screen.getByText('Base Style Test');
    expect(element).toHaveClass('text-base');
    expect(element).toHaveClass('italic');
    expect(element).toHaveClass('text-obsidian');
  });
});
