import React from 'react';
import { render } from '@testing-library/react';
import { BasicReactExports } from './react-exports.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicReactExports />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
