import React from 'react';
import { shallow } from 'enzyme';
import { Typography, Button } from '@material-ui/core';

import JobCard from './JobCard';

const dataFixture = {
  id: 1,
  title: 'Frontend Developer',
  employment_type: 'full_time',
};

describe('JobCardComponent', () => {
  it('renders correctly', () => {
    const props = {
      ...dataFixture,
      onSelect: jest.fn(),
    };

    const wrapper = shallow(<JobCard {...props} />);

    expect(wrapper.find(Typography).text()).toEqual(props.title);
  });

  it('triggers onSelect on button click', () => {
    const props = {
      ...dataFixture,
      onSelect: jest.fn(),
    };

    const wrapper = shallow(<JobCard {...props} />);

    wrapper.find(Button).simulate('click');
    expect(props.onSelect).toHaveBeenCalled();
  });
});
