import jsonPlaceholder  from "../apis/jsonPlaceholder";


// Redux Thunk
export const fetchPosts = () => async dispatch => {
   const response = await jsonPlaceholder.get('/posts');

   dispatch({ type: 'FETCH_POSTS', payload: response.data });
};