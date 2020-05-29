export const fetchUsersData = async () => {
  try {
    const response = await fetch()
    return response.toJson()
  } catch (error) {
    console.log(error)
    return error
  }
}
