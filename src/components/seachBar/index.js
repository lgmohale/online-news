import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { makeStyles, Button, InputAdornment, TextField, Container, Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import  { searchNews }  from '../../store/actions/newsAction';

 const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const dispatch = useDispatch();
  const classes = useStyles();
  
  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(searchNews(query, fromDate, toDate))
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={classes.root} >
          <TextField
            className={classes.margin}
            id="input-search-article"
            placeholder="search"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={e => setQuery(e.target.value)}
          />

          <TextField
            className={classes.margin}
            id="input-from-date"
            type="date"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography>From</Typography>
                </InputAdornment>
              ),
            }}
            onChange={e => setFromDate(e.target.value)}
          />

          <TextField
            className={classes.margin}
            id="input-to-date"
            type="date"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Typography>To</Typography>
                </InputAdornment>
              ),
            }}
            onChange={e => setToDate(e.target.value)}
          />

          <Button type="submit" variant="contained">SEARCH</Button>
        </form>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(2),
    },
  })
);

export default SearchBar;
