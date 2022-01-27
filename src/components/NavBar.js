import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/' exact='true'>
          Users Management
        </Link>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/list'>
                Users List
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/add'>
                Add User
              </Link>
            </li>
            {/* <li className='nav-item'>
              <a className='nav-link disabled'>Disabled</a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
