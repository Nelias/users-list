import axios from 'axios'

export const fetchUsersData = async () => {
  return await axios({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/users',
    responseType: 'json',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
}
