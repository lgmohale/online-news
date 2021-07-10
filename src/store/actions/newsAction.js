import { GET_NEWS, ERROR_NEWS } from '../types';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_KEY;

const getNews = () => async dispatch => {
    try{
        const res = await axios.get(apiUrl)
        dispatch({
            type: GET_NEWS,
            payload: res.data.articles
        })
    }
    catch(error){
        dispatch({
            type: ERROR_NEWS,
            payload: error
        })
    };
};

export default getNews;
