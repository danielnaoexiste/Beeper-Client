import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import beeperApi from '../api/beeper';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload}
        case 'signin':
            return { errorMessage: '', token: action.payload}
        case 'signout':
            return { errorMessage: '', token: null}
        case 'clear_error_message':
            return { ...state, errorMessage: '' }
        default:
            return state;
    };
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
}

const signup = (dispatch) => async ({ email, password }) => {
    try {
        const response = await beeperApi.post('/signup', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('BeepList')
    } catch(e) {
        dispatch({ type: 'add_error', payload: e.response.data.error });
    }
};


const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await beeperApi.post('/signin', {email, password});
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({ type: 'signin', payload: response.data.token })
        navigate('BeepList')
    } catch(e) {
        dispatch({ type: 'add_error', payload: e.response.data.error });
    }
};

const tryLocalSignin = (dispatch) => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token })
        navigate('BeepList')
    } else {
        navigate('Signup')
    }
}

const signout = (dispatch) => async () => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' })
    navigate('loginFlow')
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, clearErrorMessage, tryLocalSignin },
    { token: null, errorMessage: '' }
);