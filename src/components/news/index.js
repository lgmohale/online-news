import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { makeStyles, CardContent, CardMedia, Button, Typography, Grid, Container, Paper, Divider } from '@material-ui/core';
import { Pagination } from '@material-ui/lab'
import Spinner from '../../utils/spinner'
import  { getNews }  from '../../store/actions/newsAction';

const News = () => {
    const dispatch = useDispatch();
    const newsListData = useSelector(state => state.newsList);
    const {news, loading, error} = newsListData;

    useEffect(() => {
        dispatch(getNews())
    }, [dispatch]);

    const classes = useStyles();

    return(
        <Container>
            <Grid container spacing={2}>
            {
            loading ? <Spinner style={{marginLeft: '50%'}}/> : 
            error ? <Typography style={{marginLeft: '50%'}}>{error.message}</Typography> : 
            news.map((index, key)=> 
            <Grid item xs={12} sm={6} key={key}>
                <Paper className={classes.card}>
                    <CardMedia 
                        component="img"
                        height="140"
                        image={index.urlToImage}
                    />
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {index.author ? index.author : "Unknown Author"}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="h3">
                            {index.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {moment(index.publishedAt).format("MMMM D, YYYY")}
                        </Typography>
                        <Button variant="outlined">
                            READ MORE
                        </Button>
                    </CardContent>
                </Paper>
            </Grid>)
            }
            </Grid>
            {!loading && news !== '' && !error? 
                <Pagination count={10} color="secondary" className={classes.page}/> : ""
            } 

            <Divider orientation="vertical" flexItem/>  

        </Container>
    );
};

const useStyles = makeStyles((theme) =>({
    card: {
      maxWidth: 450,
      height: 400
    },
    page: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        justifyContent:"center",
        display:'flex'
    }
}));

export default News;