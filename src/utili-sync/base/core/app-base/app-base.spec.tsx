import React from 'react';
import { render } from '@testing-library/react-native';
import { AppBaseUsage } from './app-base.composition';

it('should render with the correct text', () => {
  const rendered = render(<AppBaseUsage />);
  expect(rendered).toBeTruthy();
});
