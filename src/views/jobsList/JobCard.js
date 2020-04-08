import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@material-ui/core';
import { Schedule } from '@material-ui/icons';

import IconTypography from '../../components/iconTypography';

function JobCard({ id, title, employment_type, onSelect }) {
  return (
    <Box mb={2}>
      <Card>
        <CardContent>
          <Typography variant="h6" id="title">{title}</Typography>
          <IconTypography variant="subtitle2" color="textSecondary">
            <Schedule />
            {employment_type === 'full_time' ? 'Full-time' : 'Part-time'}
          </IconTypography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => onSelect(id)}>
            Learn More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default JobCard;
