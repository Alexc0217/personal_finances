import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import React from 'react';

const Copyright = (props) => {
  return (
    // eslint-disable-next-line max-len
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
          Personal Finances
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
