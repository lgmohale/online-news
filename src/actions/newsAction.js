import { GET_NEWS, ERROR_NEWS } from '../types';
import axios from 'axios';

const url = `https://newsapi.org/v2/top-headlines/sources?country=zaapiKey=${process.env.NEWSAPI_KEY}`,

export default getNews = () => async dispatch => {
    try{
        const res = axios.get(url)
        dispatch({
            type: GET_NEWS,
            payload: (await res).data
        });
    }
    catch(error){
        dispatch({
            type: ERROR_NEWS,
            payload: error
        });
    };
};