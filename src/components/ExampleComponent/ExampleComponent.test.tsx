/* global describe it */
/* global expect */

import React from 'react';
import renderer from 'react-test-renderer';

import ExampleComponent from './ExampleComponent';

describe('<Dashboard />', () => {
  it('should match snapshot', () => {
    const component = renderer.create(<ExampleComponent />);

    expect(component.toJSON()).toMatchSnapshot();
  });
});
