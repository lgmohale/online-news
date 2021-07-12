import './App.css';
import { Grid } from '@material-ui/core';
import NewsComponent from './components/news'
import Publishers from './components/publishers';
import SearchBar from './components/seachBar';

const App = () => {
  return (
    <div className="App">
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <SearchBar />
        </Grid>
        <Grid item xs={8}>
          <NewsComponent />
        </Grid>
        <Grid item xs={4}>
        < Publishers />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
