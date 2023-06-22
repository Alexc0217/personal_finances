import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux';
import { setAccountStats } from '../../store/reducers/accountSlice';

export const useTransactions = () => {
  const dispatch = useDispatch()

  const newTransaction = async (data) => {
    switch (data.type) {
      case 'deposit':
        await axios
            .post(`http://localhost:3000/api/user/${data.id}/add-value`, {
              value: data.value, description: data.description,
            })
            .then(() => toast.success('Transação criada com sucesso!'))
            .catch(() => toast.error('Ocorreu um erro ao criar uma transação! '))
        break;
      case 'withdrawal':
        await axios
            .post(`http://localhost:3000/api/user/${data.id}/remove-value`)
            .then(() => toast.success('Transação criada com sucesso!'))
            .catch(() => toast.error('Ocorreu um erro ao criar uma transação! '))
        break;
      case 'change':
        break
      default:
        return
    }
  }
  return { newTransaction };
}

