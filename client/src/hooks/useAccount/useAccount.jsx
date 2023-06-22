import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { toast } from 'react-toastify'

const useAccount = () => {
  const [data, setData] = useState()
  const fetch = async () => {
    const response = await axios
        .get(`http://localhost:3000/api/user/${localStorage.getItem('userId')}`)
        .catch((error) => toast.error('Não foi possível carregar os dados da conta!'))
    setData({
      stats: response.data,
      transactions: response.data.Account.Transactions.map((e) => {
        return {...e, value: `R$ ${e.value.toFixed(2).replace('.', ',')}`, createdAt: new Date(e.createdAt).toLocaleDateString()}
      }),
    })
  }

  useEffect(() => {
    fetch()
  }, [])

  return { data, fetch };
}

export default useAccount;
