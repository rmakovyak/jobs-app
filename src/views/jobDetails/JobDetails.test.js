import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '@material-ui/core';

import JobDetails from './JobDetails';

const dataFixture = {
  id: 1,
  title: 'Frontend Developer',
  description: 'Lorem ipsum dolor sit amet',
  employment_type: 'full_time',
  salary: '3590',
  location: 'Berlin',
};

/**
 * I've skipped tests for salary, location and employment type visuals
 * Happy to discuss it later.
 */

describe('JobDetailsComponent', () => {
  it('renders correctly', () => {
    const props = {
      data: dataFixture,
      onBackButtonClick: jest.fn(),
    };

    const wrapper = shallow(<JobDetails {...props} />);

    expect(wrapper.find('#title').text()).toEqual(props.data.title);
    expect(wrapper.find('#description').text()).toEqual(props.data.description);
  });

  it('returns {} if data is empty', () => {
    const props = {
      data: null,
      onBackButtonClick: jest.fn(),
    };

    const wrapper = shallow(<JobDetails {...props} />);

    expect(wrapper).toEqual({});
  });

  it('triggers onBackButtonClick on button click', () => {
    const props = {
      data: dataFixture,
      onBackButtonClick: jest.fn(),
    };

    const wrapper = shallow(<JobDetails {...props} />);

    wrapper.find(Button).simulate('click');
    expect(props.onBackButtonClick).toHaveBeenCalled();
  });
});
