import styled from 'styled-components';
import { Typography } from '@material-ui/core';

const IconTypography = styled(Typography)`
  display: flex;
  align-items: center;
  padding: 8px 8px 8px 0;

  svg {
    margin-right: 4px;
    width: 16px;
  }
`;

export default IconTypography;
