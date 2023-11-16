import React from 'react';
import logo from '../assets/images.png'

function AppNavbar(props) {
    return (
        <div>
            <div className='container '>
               <nav className='navbar navbar-expand-lg navbar-light'>
                    <div className='nabBrand'>
                        <a className='navbar-brand' href='/'> <img style={{width:'50px'}} src={logo} alt='logo' /> </a>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span className="navbar-toggler-icon"></span>
                     </button>
                    <div className='collapse navbar-collapse justify-content-end' id='navbarSupportedContent'>
                    <ul className='d-flex navbar-nav'>
                         <li className='nav-item'><a  className='nav-link text-dark font-weight-bold mx-3' href='/'>Home</a></li>
                         <li className='nav-item'><a className='nav-link text-dark font-weight-bold mx-3' href='/team'>Team</a></li>
                         <li className='nav-item'><a className='nav-link text-dark font-weight-bold mx-3' href='/service'>Services</a></li>
                         <li className='nav-item'><a className='nav-link text-dark font-weight-bold mx-3' href='/project'>Projects</a></li>
                         <li className='nav-item'><a className='nav-link text-dark font-weight-bold mx-3' href='/testomonial'>Testomonial</a></li>
                         <button className='btn btn-outline-success mx-3'>Login</button>
                         <button className='btn btn-success'>Register</button>
                    </ul>
                
                    
                </div>
               </nav>
            </div>
            
        </div>
    );
}

export default AppNavbar;
                        