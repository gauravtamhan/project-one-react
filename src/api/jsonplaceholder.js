import axios from 'axios'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

/**
 * Posts
 */
export const fetchAllPosts = async () => {
  const result = await axios.get(`${BASE_URL}/posts`)
  return result.data
}

export const fetchSinglePost = async (id) => {
  const result = await axios.get(`${BASE_URL}/posts/${id}`)
  return result.data
}

export const fetchAllCommentsByPost = async (id) => {
  const result = await axios.get(`${BASE_URL}/posts/${id}/comments`)
  return result.data
}

/**
 * Users
 */
export const fetchAllUsers = async () => {
  const result = await axios.get(`${BASE_URL}/users`)
  return result.data
}

export const fetchSingleUser = async (id) => {
  const result = await axios.get(`${BASE_URL}/users/${id}`)
  return result.data
}

export const fetchAllPostsByUser = async (id) => {
  const result = await axios.get(`${BASE_URL}/users/${id}/posts`)
  return result.data
}
