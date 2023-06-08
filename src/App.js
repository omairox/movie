import './App.css';
import Header from './components/Header';
import React, { useEffect , useState } from 'react';
import MovieScreen from './components/MovieScreen';
import axios from 'axios';
import WatchList from './components/WatchList';

function App() {

  const [movieList, setMovieList] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [page, setPage] = useState(1);

//   const getData = () => {
//     axios
//         .get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
//         .then((res) => {
//             console.log(res.data.results);
//             setMovieList(res.data.results);
//         });
// };

  const addMovie = movie => setWatchList([...watchList, movie])

  const removeMovie = movie => {

    const newState = watchList.filter(item => item !== movie);
    setWatchList(newState)

  }

  const getData = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      console.log(data.results);
      setMovieList(data.results);
  }

  useEffect(() => {
    getData();
  }, [page])

  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen
          movieList={movieList}
          page={page}
          setPage={setPage}
          watchList={watchList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <WatchList watchList={watchList} removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
