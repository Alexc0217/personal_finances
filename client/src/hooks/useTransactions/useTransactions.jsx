import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'

export const useTransactions = () => {
  const newTransaction = async (data) => {
    switch (data.type) {
      case 'deposit':
        await axios
            .post(`http://localhost:3000/api/user/${data.id}/add-value`)
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
  const accountStats = async (id) => {
    await axios
        .get(`http://localhost:3000/api/user/${id}`)
        .then((response) => response.data)
        .catch((error) => toast.error('Não foi possível carregar os dados da conta!'))
  }
  return { newTransaction, accountStats };
}

