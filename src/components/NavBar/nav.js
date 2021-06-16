import React from 'react'
import {Link} from 'react-router-dom';
import {useState} from 'react';
import './nav.css'
const Nav = ()=>{
    const [toggle,setToggle]= useState(false);
    const toggler = () =>{
           setToggle((prev)=>!prev)
    }

    return(
        <div className="nav-container">
              <div className="nav-menu">
                <Link to="/" className="logo-link">
                        <div className="logo">
                        <img src="/srcImages/—Pngtree—animal flying branch parrot_4450109.png" width="35px"/>
                        <h3>Life of Almas</h3>           
                        </div>
                </Link>
                <div className="togle" onClick={toggler}>menu</div>
              </div>      
               <div className={toggle?"nav-bar":"nav-barf"} >
                    <Link to="/" className="n-item">Home</Link>
                    <Link to="/about" className="n-item">About</Link>
                    <Link to="contact" className="n-item">contact</Link>
                    <Link to="blogs" className="n-item">blogs</Link>
                    <input type="search" placeholder="type..." className="s-bar"></input>
               </div>
        </div>
    );
}
export default Nav;