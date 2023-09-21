import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicAppBase } from './app-base.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAppBase />);
  const rendered = getByText('hello from AppBase');
  expect(rendered).toBeTruthy();
});
