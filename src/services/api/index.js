import axios from 'axios'
import { QueryClient } from 'react-query'
import { restorageItem } from 'services/storage'

export const api = axios.create({
  baseURL: ' https://api.bookclub.mapadaprogramacao.com.br',
  headers: {
    Authorization: `bearer ${restorageItem('@bookclub_token')}`
  }
})

export const queryClient = new QueryClient()
