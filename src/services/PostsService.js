import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/posts`
});

const getPosts = () => http.get('/')

const deletePost = id => http.delete(`/${id}`)

export default {
  getPosts,
  deletePost
}