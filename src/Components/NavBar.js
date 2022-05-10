import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import '../styles/NavBar.css';

function NavBar() {
  return (
    <div className="navbar">
        <div className='navbar-logo'>
            <img src='https://www.proffus.com/wp-content/uploads/2020/11/logo1.png' alt='' className='logo'></img>
        </div>
        <div className='nav-buttons'>
            <Button variant="text">Category</Button>
            <Button variant="text">FAQs</Button>
            <Button variant="text">My Cart</Button>
            <Button variant="contained">Login</Button>
        </div> 
    </div>
  );
}

export default NavBar;
