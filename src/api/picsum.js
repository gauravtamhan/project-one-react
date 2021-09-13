import axios from 'axios'

const BASE_URL = 'https://picsum.photos'

export const fetchNumberOfImages = async (limit = 10) => {
  const result = await axios.get(`${BASE_URL}/v2/list?limit=${limit}`)
  return result.data
}

export const fetchSingleImage = async () => {
  const result = await axios.get(`${BASE_URL}/680/430`)
  return result.data
}
