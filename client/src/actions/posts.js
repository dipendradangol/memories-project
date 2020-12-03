import * as api from '../api'; // * as means import everything from the actions as api that allows to fetch post

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post); // making an api request (post api request) to the backend server 

        dispatch({ type: 'CREATE', payload: data }) // dispatch the action
    } catch (error) {
        console.log(error);
    }
}