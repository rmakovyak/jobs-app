import React from 'react';

import JobCard from './JobCard';

function JobsList({ data, onSelect }) {
  if (!data.length) {
    return null;
  }

  return data.map(({ id, ...otherProps }) => (
    <JobCard key={id} id={id} onSelect={onSelect} {...otherProps} />
  ));
}

export default JobsList;
