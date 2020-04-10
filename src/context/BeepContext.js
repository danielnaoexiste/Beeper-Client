import createDataContext from './createDataContext'
import { AsyncStorage, Alert } from 'react-native';
import beeperApi from '../api/beeper'

const beepReducer = (state, action) => {
    switch (action.type) {
        case 'get_posts':
            return action.payload;
        case 'delete_post':
            return state.filter((beepPost) => beepPost._id !== action.payload);
        default:
            return state;
    }
}


const getPosts = (dispatch) => async () => {
    let token = await AsyncStorage.getItem('token')
    const response = await beeperApi.get('/posts', { 'headers': { 'Authorization': 'Bearer ' + token } });
    dispatch({ type: 'get_posts', payload: response.data });
}


const addPost = (dispatch) => async (title, content, lastEdited, callback) => {
    let token = await AsyncStorage.getItem('token')
    await beeperApi.post('/posts', { title, content, lastEdited }, { 'headers': { 'Authorization': 'Bearer ' + token } })
    callback ? callback() : null;
}


const deletePost = (dispatch) => async (id) => {
    let token = await AsyncStorage.getItem('token')
    await beeperApi.delete(`/remove/${id}`, { 'headers': { 'Authorization': 'Bearer ' + token } });
    dispatch({ type: 'delete_post', payload: id })
}


const editPost = (dispatch) => async (id, title, content, lastEdited, callback) => {
    let token = await AsyncStorage.getItem('token');
    await beeperApi.put(`/update/${id}`, { title, content, lastEdited }, { 'headers': { 'Authorization': 'Bearer ' + token } })
    .finally(() => callback())
}

const starPost = (dispatch) => async (id, callback, starred) => {
    try {
        let token = await AsyncStorage.getItem('token');
        await beeperApi.put(`/starred/${id}`, { starred: starred }, { 'headers': { 'Authorization': 'Bearer ' + token } })
        callback ? callback() : null
    } catch (e) {
        console.log(e.message)
    }
}

const getStars = (dispatch) => async() => {
    let token = await AsyncStorage.getItem('token');
    const response = await beeperApi.get('/starred', { 'headers': { 'Authorization': 'Bearer ' + token } });
    dispatch({ type: 'get_posts', payload: response.data });
}

export const { Context, Provider } = createDataContext(
    beepReducer,
    { addPost, deletePost, editPost, getPosts, starPost, getStars },
    []
)