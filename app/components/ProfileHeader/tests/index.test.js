import React from 'react';
import { shallow } from 'enzyme';

import ProfileHeader from '../index';

describe('<ProfileHeader />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<ProfileHeader />);
    expect(renderedComponent.find('div').length).toEqual(1);
  });
});
