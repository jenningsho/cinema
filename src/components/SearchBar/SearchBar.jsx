import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovies } from '../../services/api';
import '../MovieList/MovieList.css';

const SearchBar = () => {
    const [searchParams] = useSearchParams(); // Récupère les paramètres de recherche
    const query = searchParams.get('query'); // Extrait le paramètre "query"
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            searchMovies(query)
                .then((response) => {
                    setMovies(response.data.results);
                    setLoading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setLoading(false);
                });
        }
    }, [query]);

    if (loading) return <div>Chargement ...</div>;
    
    if (error) return <div>Erreur trouvée: {error}</div>;

    return (
        <div className="search-results">
            <h1>Résultats pour "{query}"</h1>
            <div className="movies-list">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.id} className="movie-card">
                            <Link to={`/movie/${movie.id}`}>
                                <img
                                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                    alt={movie.title}
                                    width={200}
                                />
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Aucun résultat trouvé.</p>
                )}
            </div>
        </div>
    );
};

export default SearchBar;
