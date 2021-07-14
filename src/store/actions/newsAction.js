import { GET_NEWS, SEARCH_NEWS, ERROR_NEWS } from '../types';
import moment from 'moment';
import axios from 'axios';

const todayDate = moment().format('YYYY-MM-D')

const apiKey = process.env.REACT_APP_API_KEY;

export const getNews = () => async dispatch => {
    try{
        const res = await axios.get(`https://newsapi.org/v2/everything?&from=${todayDate}&apiKey=${apiKey}`)
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

export const searchNews = (query, fromDate, toDate) => async dispatch => {
    try{
        const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&from=${fromDate}&to=${toDate}&sortBy=popularity&apiKey=${apiKey}`)
        dispatch({
            type: SEARCH_NEWS,
            payload: res.data.articles
        })
    }
    catch(error){
        dispatch({
            type: ERROR_NEWS,
            payload: error
        })
    };
}
