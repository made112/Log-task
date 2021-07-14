import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = ()=>
{
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <Link to = '/'>
                    
                <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </Link>
                </li>
                    
                <li class="nav-item">
                <Link to = '/register'>

                <a class="nav-link" href="#">Register</a>
                </Link>
                </li>
                
                <li class="nav-item">
                <Link to = '/login'>

                <a class="nav-link" href="#">Login</a>
                </Link>
                </li>
                <li class="nav-item">

                
                <a class="nav-link" href="#">Logout</a>
                </li>
                
            </ul>
            
            </div>
        </div>
        </nav>
    )
}
export default Navbar