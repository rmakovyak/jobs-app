import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from '@material-ui/lab';

import JobDetails from './JobDetails';
import JobDetailsContainer from './JobDetails.container';

import * as jobServices from '../../services/jobs';

const props = {
  history: {
    push: jest.fn,
  },
  match: {
    params: {
      id: '1',
    },
  },
};

jobServices.getJob = jest.fn();

/**
 * I've went with rather simple version of async fetch behaviour testing
 * Happy to discuss it later.
 */

describe('JobsDetailsContainer', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<JobDetailsContainer {...props} />);

    expect(wrapper.find(JobDetails).exists()).toBe(true);
  });

  it('requests a job on mount', () => {
    shallow(<JobDetailsContainer {...props} />);

    expect(jobServices.getJob).toHaveBeenCalledWith(props.match.params.id);
  });

  it('displays error if failed to fetch a job', () => {
    const wrapper = shallow(<JobDetailsContainer {...props} />);
    wrapper.setState({ error: true });

    expect(wrapper.find(Alert).exists()).toBe(true);
    expect(wrapper.find(JobDetails).exists()).toBe(false);
  });
});
