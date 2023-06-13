import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

export const Overview = () => {
  return (
    <Container maxWidth="md">
      <Box display="flex" flexDirection="column" gap={10}>
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
        <Box display="flex" flexDirection="column">
          <Typography variant='h7' color="text.primary">
            + Nova transação
          </Typography>
          <DataGrid
            rows={[
              { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
              { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
              { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
              { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
              { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
              { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
              { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
              { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
              { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
            ]}
            columns={[
              { field: 'id', headerName: 'ID', width: 70 },
              { field: 'firstName', headerName: 'First name', width: 130 },
              { field: 'lastName', headerName: 'Last name', width: 130 },
              {
                field: 'age',
                headerName: 'Age',
                type: 'number',
                width: 90,
              },
              {
                field: 'fullName',
                headerName: 'Full name',
                description: 'This column has a value getter and is not sortable.',
                sortable: false,
                width: 160,
                valueGetter: (params) =>
                  `${params.row.firstName || ''} ${params.row.lastName || ''}`,
              },
            ]}
            sx={{
              border: 'none',
            }}
          />
        </Box>
      </Box>
    </Container>

  )
}

