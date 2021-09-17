import React from 'react';
import logo from '../logo.svg';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" width={40} height={40} />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/">Home</a>
                        
                        <a className="nav-item nav-link" href="/new/">Add Post</a>
                        <a className="nav-item nav-link" href="/profile">Profile</a>
                        <a className="nav-item nav-link" href="#">Log out</a>
                        
                        <a className="nav-item nav-link" href="#">Log In</a>
                        
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header;