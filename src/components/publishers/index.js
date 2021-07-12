import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, List, ListItem, ListItemText, Typography, Divider } from '@material-ui/core';

import  { searchNews }  from '../../store/actions/newsAction';

const Publishers = () => {

    const dispatch = useDispatch();
    const newsListData = useSelector(state => state.newsList);
    const { news, loading } = newsListData;

    return(
        <Container>
            <Divider />
            <Typography>PUBLISHERS</Typography>
            {!loading && news !== null?
                news.map((index, key) =>
                <List key={key}>
                    <ListItem button>
                        <ListItemText primary={index.author ? index.author : "Unknown Author" } onClick={dispatch(searchNews(index.author))}/>
                    </ListItem>
                </List>
                ): ''
            }
            <Divider />
        </Container>
    );
};

export default Publishers;