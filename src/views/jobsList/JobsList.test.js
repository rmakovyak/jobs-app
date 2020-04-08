import React from 'react';
import { shallow } from 'enzyme';

import JobList from './JobsList';
import JobCard from './JobCard';

const dataFixture = [
  {
    id: 1,
    title: 'Frontend Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    employment_type: 'full_time',
    salary: '3590',
    location: 'Berlin',
  },
  {
    id: 2,
    title: 'Backend Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    employment_type: 'full_time',
    salary: '4000',
    location: 'Hamburg',
  },
];

describe('JobListComponent', () => {
  it('renders correctly', () => {
    const props = {
      data: dataFixture,
      onSelect: jest.fn(),
    };

    const wrapper = shallow(<JobList {...props} />);

    expect(wrapper.find(JobCard)).toHaveLength(2);
  });

  it('returns {} if data is empty', () => {
    const props = {
      data: [],
      onSelect: jest.fn(),
    };

    const wrapper = shallow(<JobList {...props} />);

    expect(wrapper).toEqual({});
  });
});
