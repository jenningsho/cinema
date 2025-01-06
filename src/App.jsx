import './App.css'
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Movies from './components/MovieList/MovieList';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import MovieDetails from './components/MovieDetails/MovieDetails';


function App() {

  return (
    <div>
      <Header/>    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies/>}/>
          <Route path="/movie/:id" element={<MovieDetails/>}/>
          {/* <Route path="/favorite" element={<Favorites/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
