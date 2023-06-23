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
import { Formik, Field } from 'formik';
import { useTransactions } from '../../hooks/useTransactions/useTransactions';

export const TransactionModal = (props) => {
  const { newTransaction } = useTransactions()

  return (
    <Dialog
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
    >
      <Formik
        initialValues={{
          description: '',
          value: '',
        }}
        onSubmit={(e) => {
          newTransaction({
            type: 'deposit',
            id: localStorage.getItem('userId'),
            description: e.description,
            value: e.value,
          })
          props.setIsOpen(false);
        }}
      >
        {({
          handleSubmit,
        } ) => (
          <Box component="form" onSubmit={handleSubmit}>
            <DialogTitle>Nova Transação</DialogTitle>
            <DialogContent>
              <Box display='flex' gap={2}>
                <Field name="description">
                  {({ field }) => (
                    <TextField
                      {...field}
                      sx={{
                        width: '65%',
                      }}
                      required
                      margin="dense"
                      label="Descrição"
                      variant="outlined"
                      helperText="Especifique a natureza da transação"
                    />
                  )}
                </Field>
                <Field name="value">
                  {({ field }) => (
                    <TextField
                      {...field}
                      sx={{
                        width: '35%',
                      }}
                      helperText="Valor da Transação"
                      margin="dense"
                      required
                      label="Valor"
                      variant="outlined"
                      defaultValue="0,00"
                      InputProps={{
                        startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                      }}
                    />
                  )}
                </Field>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => props.setIsOpen(false)}>Cancelar</Button>
              <Button type='submit'>Criar</Button>
            </DialogActions>
          </Box>
        )}
      </Formik>
    </Dialog>
  );
}

