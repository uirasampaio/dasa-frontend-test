import axios from 'axios';

const api = axios.create({ baseURL:'https://api.github.com'})

export const getUserRepo = (user) => {
  return api.get(`/users/${user}/repos`)
}
