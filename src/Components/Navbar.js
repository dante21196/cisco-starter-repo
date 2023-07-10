import React from 'react'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      
      <h1 className='nav-item text-lg center ' style={{'margin': '0 auto'}}>Sextant</h1>
      {/* <span className="navbar-text">
        Navbar text with an inline element
      </span>*/}
    </div> 
  </div>
</nav>
      
    </div>
  )
}
