import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
      </ul>
    
      {/* <div className="d-flex">
          <div className="bg-danger rounded mx-2 border border-primary" 
          onClick={()=>{props.toggleMode('danger')}}
          style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
          <div className="bg-light rounded mx-2 border border-primary" 
          onClick={()=>{props.toggleMode('light')}}
          style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
          <div className="bg-dark rounded mx-2 border border-primary" 
          onClick={()=>{props.toggleMode('dark')}}
          style={{height: '20px', width: '20px', cursor: 'pointer'}}></div>
      </div> */}
      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" 
        type="checkbox" 
        value={props.mode}
        onClick={props.toggleMode} 
        role="switch" 
        id="flexSwitchCheckDefault"
        disabled={props.mode === 'danger'} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: "Set title here"
}