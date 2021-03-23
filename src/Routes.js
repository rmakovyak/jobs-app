import React from 'react';
import { Route, Switch } from 'react-router-dom';

import JobsList from './views/jobsList';
import JobDetails from './views/jobDetails';

const routes = [
  {
    path: '/',
    exact: true,
    component: JobsList,
  },
  {
    path: '/jobs/:id',
    exact: true,
    component: JobDetails,
  },
];

function Routes() {
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route key={i} {...route} />
      ))}
    </Switch>
  );
}
console.log('helo world');
export default Routes;
