import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

export const Overview = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" gap={10}>
        <Box display={'flex'} gap={10}>
          <Card sx={{ width: "33%" }}>
            <CardContent>
              <Box display='flex' justifyContent='space-between' sx={{ mb: 1.5 }}>
                <Typography variant="h5" component="div">
                  Entradas
                </Typography>
                <ArrowCircleUpOutlinedIcon fontSize='large' color='success'/>
              </Box>
              <Typography variant='h4' color="text.secondary">
            R$ 0,00
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "33%" }}>
            <CardContent>
              <Box display='flex' justifyContent='space-between' sx={{ mb: 1.5 }}>
                <Typography variant="h5" component="div">
                 Saídas
                </Typography>
                <ArrowCircleDownOutlinedIcon fontSize='large' color='error'/>
              </Box>
              <Typography variant='h4' color="text.secondary">
            R$ 0,00
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "33%" }}>
            <CardContent>
              <Box display='flex' justifyContent='space-between' sx={{ mb: 1.5 }}>
                <Typography variant="h5" component="div">
                  Balanço Total
                </Typography>
                <MonetizationOnOutlinedIcon fontSize='large'/>
              </Box>
              <Typography variant='h4' color="text.secondary">
            R$ 0,00
              </Typography>
            </CardContent>
          </Card>
        </Box>
        <Box display="flex" flexDirection="column">
          <Typography variant='h7' color="text.primary">
            + Nova transação
          </Typography>
          <DataGrid
            rows={[
              { id: 1, description: 'Pagamento da Conta de Água', amount: 'R$ 100,00', date: new Date().toLocaleString() },
              { id: 2, description: 'Pagamento da Conta de Luz', amount: 'R$ 82,00', date: new Date().toLocaleString() },
            ]}
            columns={[
              { field: 'id', headerName: 'ID', width: 100 },
              { field: 'description', headerName: 'Descrição', width: 300 },
              { field: 'amount', headerName: 'Valor', width: 200 },
              { field: 'date', headerName: 'Data', width: 200 },
            ]}
            sx={{
              border: 'none',
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      </Box>
    </Container>

  )
}

