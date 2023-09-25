import React from 'react';
import {render} from '@testing-library/react-native';
import {BasicUsage} from './app-button-base.composition';

it('should render', () => {
  const rendered = render(<BasicUsage />);
  expect(rendered).toBeTruthy();
});
