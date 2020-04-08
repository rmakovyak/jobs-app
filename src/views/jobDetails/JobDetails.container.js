import React, { Component } from 'react';
import { Alert } from '@material-ui/lab';

import { getJob } from '../../services/jobs';

import JobDetails from './JobDetails';

class JobDetailsContainer extends Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    const {
      match: {
        params: { id },
      },
    } = this.props;

    try {
      const { data } = await getJob(id);
      this.setState({ data });
    } catch (error) {
      this.setState({ error });
    }
  }

  handleBackButtonClick = () => {
    const { history } = this.props;

    history.goBack();
  };

  render() {
    const { data, error } = this.state;

    if (error) {
      return <Alert severity="error">Error fetching job</Alert>;
    }

    return (
      <JobDetails data={data} onBackButtonClick={this.handleBackButtonClick} />
    );
  }
}

export default JobDetailsContainer;
