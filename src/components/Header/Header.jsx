import './header.css';


const Header = () => {
    return (
        <nav className="navbar bg-dark">
            <div className="container-fluid d-flex">
                <span href="" className="navbar-brand mb-0 h1 text-success fw-bolder">FAVFLICKS</span>
                <form action="" className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search movies..." aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <a href="">Favourite</a>
            </div>
        </nav>

    )
}

export default Header;