import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './index';

const meta = {
  title: 'UI/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

const GridItemDemo = ({
  span,
  bgColor = 'bg-amber',
}: {
  span: number;
  bgColor?: string;
}) => (
  <div className={`${bgColor} p-2 text-center rounded-md text-white`}>
    <p className='text-sm font-medium'>Span {span}</p>
  </div>
);

export const MobileGrid: Story = {
  args: {
    children: (
      <>
        {[1, 2, 3, 4, 5, 6].map((span) => (
          <div key={span} className='col-span-1'>
            <GridItemDemo span={span} />
          </div>
        ))}
      </>
    ),
  },
};

export const DesktopGrid: Story = {
  args: {
    children: (
      <>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((span) => (
          <div key={span} className='col-span-6 md:col-span-1'>
            <GridItemDemo span={span} />
          </div>
        ))}
      </>
    ),
  },
};

export const MixedLayout: Story = {
  args: {
    children: (
      <>
        <div className='col-span-12 md:col-span-3'>
          <GridItemDemo span={3} bgColor='bg-supplementary-1' />
        </div>
        <div className='col-span-12 md:col-span-4'>
          <GridItemDemo span={4} bgColor='bg-supplementary-3' />
        </div>
        <div className='col-span-12 md:col-span-5'>
          <GridItemDemo span={5} bgColor='bg-supplementary-2' />
        </div>
      </>
    ),
  },
};
