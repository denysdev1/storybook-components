import type { Preview } from '@storybook/react';
import { Manrope } from 'next/font/google';
import '../src/app/globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => {
      document.body.classList.add(manrope.className);

      return Story();
    },
  ],
};

export default preview;

