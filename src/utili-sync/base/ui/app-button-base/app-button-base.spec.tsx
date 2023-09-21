import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicAppButtonBase } from './app-button-base.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAppButtonBase />);
  const rendered = getByText('hello from AppButtonBase');
  expect(rendered).toBeTruthy();
});
