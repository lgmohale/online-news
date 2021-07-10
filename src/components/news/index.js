import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  getNews  from '../../store/actions/newsAction';

const News = () => {
    const dispatch = useDispatch();
    const newsListData = useSelector(state => state.newsList);
    const {news, loading, error} = newsListData;

    useEffect(() => {
        dispatch(getNews())
    }, [dispatch]);

    return(
        <div>
            {loading ? 'loading...' : error ? error.message : news.map((i, key )=> <h3 key={key}>{i.author}</h3>)}
        </div>
    )
};

export default News;