import React from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'

export const useAuth = () => {
  const navigate = useNavigate()

  const login = async (body) => {
    await axios
        .post('http://localhost:3000/api/users/login', body)
        .then((response) => response.status === 201 && navigate('/home'))
        .catch(() => {
          toast.error('Ocorreu um erro ao realizar a autenticação!')
        })
  }
  const logout = () => navigate('/')

  const register = async (body) => {
    await axios
        .post('http://localhost:3000/api/users', body)
        .then(() => {
          toast.success('Sua conta criada com sucesso!')
          navigate('/signin')
        })
        .catch(() => {
          toast.error('Ocorreu um erro ao criar a conta!')
        })
  }

  return { login, logout, register }
}
