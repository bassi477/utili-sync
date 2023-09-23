import React from 'react';
import { render } from '@testing-library/react-native';
import { AppButtonExample } from './app-button-base.composition';

it('should render', () => {
  const rendered = render(<AppButtonExample />);
  expect(rendered).toBeTruthy();
});
