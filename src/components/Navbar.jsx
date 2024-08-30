import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './CSS/Navbar.css';
import Logo from './Images/Logo.png';

export default function Navbar(props) {

  const handleSearch = (e) => {
    props.setSearch(e.target.value);
    if(e){
      document.getElementById("searchButton").click();
    }
  }

  return (
    <>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark" style={{borderBottom:'1px solid rgb(221 219 230 / 30%)', backgroundColor:'#001429', minHeight:'73px'}}>
    
      <div className="container-fluid">
      <a href="#">
        <img src={Logo} width="30" height="30"
          alt="Error"/>
      </a>
        <a className="navbar-brand" style={{fontSize: '25px', fontWeight:'600', padding:'6px', color: 'whitesmoke'}} href='/' >
          CryptX
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item mx-3 my-1">
              <Link className="nav-link hoverByCSS " aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-3 my-1">
              <Link className="nav-link hoverByCSS" aria-current="page" to="/cryptocurrency">Crypto</Link>
            </li>
            <li className="nav-item mx-3 my-1">
              <a className="nav-link  hoverByCSS" target="_blank" href="https://github.com/arpitjha2511">GitHub</a>
            </li>
            <li className="nav-item mx-3 my-1">
            <a className="nav-link hoverByCSS" target="_blank" href="https://www.linkedin.com/in/arpitjha2511/">Linkedin</a>
            </li>
            <li className="nav-item mx-3 my-1">
            <a className="nav-link disabled" target="_blank" >Other Projects</a>
            </li>
            
          </ul>
        
          <div className="searchButton d-flex my-2 mx-3">
            <input type="search" className="form-control me-2" placeholder="Search" onChange={handleSearch} />
            <Link to={`/search/${props.search}`}>
              <button className="btn btn-outline-info rounded-1 mx-2" id="searchButton">Search</button>
            </Link>
          </div>

          <div className="form-check form-switch mx-3">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}  style={{cursor:'pointer'}} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: 'whitesmoke'}}>
              Dark Mode
            </label>
          </div>

        </div>
      </div>
    </nav>
    </>
  )
}