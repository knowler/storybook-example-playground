import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { configure, addDecorator } from '@storybook/react';
import theme from '../src/theme';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

configure(require.context('../src', true, /\.stories\.(js|mdx)$/), module);
