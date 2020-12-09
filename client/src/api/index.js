import axios from 'axios';

const url = 'https://memorie-project.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost); // we get entire post in a parameter newPost and send data as whole newPost

// implement the api call for the update post route

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// initiating deletePost from route and implementing the api call

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);