import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React from 'react';

export const Copyright = (props) => {
  return (
    // eslint-disable-next-line max-len
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
          Finance Friend
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

