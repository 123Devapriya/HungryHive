/* eslint-disable react/jsx-no-undef */

import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';


const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navbar(props) {


    const [cartView, setCartView] = useState(false)
    localStorage.setItem('temp', "first")
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token')

        navigate("/login")
    }

    const loadCart = () => {
        setCartView(true)
    }

    const items = useCart();
    return (
        <div>

            <nav className="navbar navbar-expand-lg navbar-dark bg-royalred position-sticky"
                style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }} >
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic"  to="/">HungryHive</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>  {/* index.css - nav-link color white */}
                        
                            </li>
                            
<Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/"onClick={() => scrollToSection('about')}> About</Link>
<Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/"onClick={() => scrollToSection('menu')}>Menu</Link>
                            
                    
                        </ul>
                        {(!localStorage.getItem("token")) ?
                            <form className="d-flex red-link">
                                <Link className="btn bg-white text-success mx-1 " id="red-link"  to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1 " id="red-link"  to="/signup">Signup</Link>
                            </form> :
                            <div>
                    <Link to="/MyOrder" className="btn bg-white" style={{ color: '#CB202D' }}> My Orders </Link>
                             
                                <div className="btn bg-white text-success mx-2 " id="red-link" onClick={loadCart}>
                                    <Badge color="secondary" badgeContent={items.length} >
                                        <ShoppingCartIcon />
                                    </Badge>
                                    Cart
                                </div>

                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}


                <button onClick={handleLogout} className="btn bg-white"
  style={{ color: '#CB202D' }}  >Logout</button></div>}

                    </div>
                </div>
            </nav>
        </div>
    )
}
