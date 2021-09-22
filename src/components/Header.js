import React from 'react';

const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg fixed-top navbar-light">
        <div class="container-fluid">
            <div class="navbar-header">
            {/* <a class="navbar-brand" href="#">WebSiteName</a> */}
            </div>
            
            <ul class="navbar navbar-nav navbar-right">
            <li className="px-2"><a href="https://github.com/iravikds"><i class="bi bi-github fs-4"></i></a></li>
            <li className="mx-2"><a href="https://raviikds.github.io"><i class="bi bi-globe fs-4"></i></a></li>
            </ul>
        </div>
        </nav>
    )
}

export default Header;