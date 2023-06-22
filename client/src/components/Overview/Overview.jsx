import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { TransactionModal } from '../TransactionModal/TransactionModal';
import { useTransactions } from '../../hooks/useTransactions/useTransactions';
import { useSelector } from "react-redux";
import useAccount from '../../hooks/useAccount/useAccount'
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export const Overview = () => {
  const { newTransaction } = useTransactions()
  const { data, fetch } = useAccount()
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch()
  }, [isOpen])

  return (
    <>
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
                  {data ? `R$ ${data.stats?.Account?.Transactions.map((e) => e.value > 0 && e.value).reduce((accumulator, currentValue) => accumulator + currentValue,
                      0).toFixed(2).replace('.', ',')}` : "-"}
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
                  {data ? `R$ ${data.stats?.Account?.Transactions.map((e) => e.value < 0 && e.value).reduce((accumulator, currentValue) => accumulator + currentValue,
                      0).toFixed(2).replace('.', ',')}` : "-"}
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
                  {data ? `R$ ${data.stats?.Account?.totalValue.toFixed(2).replace('.', ',')}` : "-"}
                </Typography>
              </CardContent>
            </Card>
          </Box>
          <Box display="flex" flexDirection="column" height={400}>
            <Button size='small' sx={{
              width: "20%",
            }} startIcon={<AddIcon />} onClick={() => setIsOpen(true)}>
            Nova transação
            </Button>
            <DataGrid
              rows={data ? data.transactions : []}
              columns={[
                { field: 'actions', headerName: 'Ações', width: 75, disableColumnMenu: true, sortable: false, renderCell: (params) =>{
                  return (
                    <IconButton onClick={() => {
                      newTransaction({
                        type: 'withdrawal',
                        id: localStorage.getItem('userId'),
                        transactionId: params.row.id,
                        value: parseFloat(params.row.value?.replace('R$', '').replace(',', '.').replace(' ', '')),
                      }).then(() => fetch())
                    }
                    }>
                      <DeleteIcon/>
                    </IconButton>
                  )
                } },
                { field: 'id', headerName: 'ID', width: 100 },
                { field: 'description', headerName: 'Descrição', width: 350, sortable: false },
                { field: 'value', headerName: 'Valor', width: 200 },
                { field: 'createdAt', headerName: 'Data', width: 100 },
              ]}
              sx={{
                border: 'none',
              }}
              pageSizeOptions={[5, 10]}
            />
          </Box>
        </Box>
      </Container>
      <TransactionModal isOpen={isOpen} setIsOpen={setIsOpen}/>
    </>

  )
}

