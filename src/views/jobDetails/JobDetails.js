import React from 'react';
import { Button, Box, Card, CardContent, Typography } from '@material-ui/core';
import { Schedule, LocationOn, Euro } from '@material-ui/icons';

import IconTypography from '../../components/iconTypography';

function JobDetails({ data, onBackButtonClick }) {
  if (!data) {
    return null;
  }

  const { title, description, employment_type, location, salary } = data;

  return (
    <>
      <Box pt={1} pb={1}>
        <Button
          variant="contained"
          size="small"
          disableElevation
          onClick={onBackButtonClick}
        >
          Back
        </Button>
      </Box>
      <Card>
        <CardContent>
          <Typography variant="h5" id="title">
            {title}
          </Typography>
          <Box display="flex">
            <IconTypography variant="subtitle2" color="textSecondary">
              <Schedule />
              {employment_type === 'full_time' ? 'Full-time' : 'Part-time'}
            </IconTypography>
            <IconTypography variant="subtitle2" color="textSecondary">
              <LocationOn />
              {location}
            </IconTypography>
            <IconTypography variant="subtitle2" color="textSecondary">
              <Euro />
              {salary}
            </IconTypography>
          </Box>
          <Typography variant="body1" id="description">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}

export default JobDetails;
