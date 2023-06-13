import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export const Overview = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <Container maxWidth="md">
      <Box display={'flex'} gap={10}>
        <Card sx={{ width: "33%" }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
              Entradas
            </Typography>
            <Typography variant='h4' color="text.secondary">
            R$ 0,00
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: "33%" }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
              Saídas
            </Typography>
            <Typography variant='h4' color="text.secondary">
            R$ 0,00
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ width: "33%" }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} variant="h6" component="div">
              Balanço Total
            </Typography>
            <Typography variant='h4' color="text.secondary">
            R$ 0,00
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>

  )
}

