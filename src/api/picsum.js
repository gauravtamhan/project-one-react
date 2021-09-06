import axios from 'axios'

const BASE_URL = 'https://picsum.photos'

export const fetchNumberOfImages = async (limit = 10) => {
  const result = await axios.get(`${BASE_URL}/v2/list?limit=${limit}`)
  return result.data
}
