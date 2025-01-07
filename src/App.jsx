import './App.css'
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Movies from './components/MovieList/MovieList';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MovieDetails from './components/MovieDetails/MovieDetails';
import SearchBar from './components/SearchBar/SearchBar';
import FavoritesMovies from './components/FavoriteMovies/FavoritesMovies';

function App() {

  return (
    <div>
        <BrowserRouter>
          <Header/>    
          <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route path="/movie/:id" element={<MovieDetails/>}/>
            <Route path="/search" element={<SearchBar/>}/>
            <Route path="/favorite" element={<FavoritesMovies/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
