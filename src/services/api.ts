import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://cartyr.vercel.app/api'
})