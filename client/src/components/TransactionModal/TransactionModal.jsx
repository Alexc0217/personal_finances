/* eslint-disable react/prop-types */
import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import InputAdornment from '@mui/material/InputAdornment';
import dayjs from 'dayjs';

export const TransactionModal = (props) => {
  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
    >
      <DialogTitle>Nova Transação</DialogTitle>
      <DialogContent sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Box>
          <TextField
            margin="dense"
            label="Descrição"
            variant="outlined"
            fullWidth
            helperText="Um breve descritivo que simbolize a natureza da transação"
          />
        </Box>
        <Box display="flex" gap={1}>
          <TextField
            margin="dense"
            label="Valor"
            variant="outlined"
            defaultValue="0,00"
            InputProps={{
              startAdornment: <InputAdornment position="start">R$</InputAdornment>,
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Data"
              defaultValue={dayjs(new Date().toDateString())}
              sx={{
                marginTop: 1,
              }}/>
          </LocalizationProvider>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => props.setIsOpen(false)}>Cancelar</Button>
        <Button>Criar</Button>
      </DialogActions>
    </Dialog>
  );
}

