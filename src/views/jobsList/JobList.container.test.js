import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from '@material-ui/lab';

import JobList from './JobsList';
import JobListContainer from './JobList.container';

import * as jobServices from '../../services/jobs';

const props = {
  history: {
    push: jest.fn,
  },
};

jobServices.getAllJobs = jest.fn();

/**
 * I've went with rather simple version of async fetch behaviour testing
 * Happy to discuss it later.
 */

describe('JobListContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<JobListContainer {...props} />);

    expect(wrapper.find(JobList).exists()).toBe(true);
  });

  it('requests jobs list on mount', () => {
    shallow(<JobListContainer {...props} />);

    expect(jobServices.getAllJobs).toHaveBeenCalled();
  });

  it('displays error if failed to fetch jobs list', () => {
    const wrapper = shallow(<JobListContainer {...props} />);
    wrapper.setState({ error: true });

    expect(wrapper.find(Alert).exists()).toBe(true);
    expect(wrapper.find(JobList).exists()).toBe(false);
  });
});
