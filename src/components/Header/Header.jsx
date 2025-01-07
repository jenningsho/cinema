import { useState } from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';


const Header = () => {

    const [ inputText, setInputText] = useState("");
    const navigate = useNavigate(); // naviguation vers la page de résultats 

    const handleSearch = (e) => {
        e.preventDefault(); // pour eviter de recharger la page 
        console.log("Mot recherché : " + inputText);
        if (inputText.trim()) {
            navigate(`/search?query=${inputText}`); 
        } else {
            alert('Veuillez entrer un terme de recherche.'); 
        }
    };


    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex">
                <Link to="/" className='navbar-brand mb-0 h1 fw-bolder'>FAVFLICKS</Link>
                <form action="" className="d-flex" role="search" onSubmit={handleSearch}>
                    <input  className="form-control me-2" 
                            type="search" 
                            placeholder="Search movies..." 
                            onChange={ (e) => setInputText(e.target.value)}
                            />
                    <button     className="btn btn-outline-success" 
                                type="submit" >
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <Link to="/favorite">Favorites</Link>
            </div>
        </nav>

    )
}

export default Header;