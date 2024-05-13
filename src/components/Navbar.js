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
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
      </ul>
    
      <div className={`form-check text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
        <input className="form-check-input" 
        type="radio" 
        name="flexRadioDefault" 
        value="light"
        onClick={props.toggleMode}
        id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
            Enable Dark Mode
        </label>
      </div>
      <div className={`form-check text-${props.mode === 'red' ? 'light' : 'danger'}`}>
        <input className="form-check-input" 
        type="radio" 
        name="flexRadioDefault" 
        value="red"
        onClick={props.toggleMode}
        id="flexRadioDefault1" />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
            Enable Red Dark Mode
        </label>
      </div>
      {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
        <input className="form-check-input" 
        type="checkbox" 
        value={props.mode}
        onClick={props.toggleMode} 
        role="switch" 
        id="flexSwitchCheckDefault"
        disabled={props.mode === 'danger'} />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div> */}
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: "Set title here",
    aboutText: "Set about text here"
}