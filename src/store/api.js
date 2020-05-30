import axios from 'axios'

export const fetchUsersData = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users',
      responseType: 'json',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.log(error)
    return error
  }
}
