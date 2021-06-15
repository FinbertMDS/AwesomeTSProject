/**
 * @format
 */

import React from 'react';
import 'react-native';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import App from '../App';


it('renders correctly', () => {
  renderer.create(<App />);
});

it('random error', () => {
  const random_boolean = Math.random() < 0.3;
  expect(random_boolean).toBe(true)
});
