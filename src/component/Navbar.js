import React from "react";
import { Link } from 'react-router-dom';

const Navbar =()=> {
        return (
            <nav className="navbar fixed-top navbar-expand-lg bg-black" data-bs-theme="dark" style={{ 
                backgroundColor: '#1d3b54'}}>
                <div className="container-fluid">
                    <Link className="navbar-brand " to="/">News.com</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            <Link className="nav-link " to="/business">Business</Link>
                            <Link className="nav-link" to="/health">Health</Link>
                            <Link className="nav-link " to="/sports">Sports</Link>
                            <Link className="nav-link " to="/technology">Technology</Link>
                            <Link className="nav-link " to="/">Sports</Link>
                            <Link className="nav-link " to="/science">Science</Link>
                            <Link className="nav-link " to="/entertainment">Entertainment</Link>
                        </div>
                    </div>
                </div>
            </nav>
        )
}
export default Navbar