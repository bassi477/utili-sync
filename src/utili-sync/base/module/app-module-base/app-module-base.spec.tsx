import React from 'react';
import { render } from '@testing-library/react-native';
import { BasicAppModuleBase } from './app-module-base.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAppModuleBase />);
  const rendered = getByText('hello from AppModuleBase');
  expect(rendered).toBeTruthy();
});
