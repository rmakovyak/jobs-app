import React, { Component } from 'react';
import { Alert } from '@material-ui/lab';

import { getAllJobs } from '../../services/jobs';

import JobsList from './JobsList';

class JobListContainer extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    try {
      const { data } = await getAllJobs();
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    }
  }

  handleSelect = (id) => {
    const { history } = this.props;

    history.push(`jobs/${id}`);
  };

  render() {
    const { data, error } = this.state;

    if (error) {
      return <Alert severity="error">Error fetching jobs</Alert>;
    }

    return <JobsList data={data} onSelect={this.handleSelect} />;
  }
}

export default JobListContainer;
