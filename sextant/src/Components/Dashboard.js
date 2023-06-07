import React from 'react'
import DataCard from '../DataCard'

export default function Dashboard() {
  
  return (

    <div className='my-5'>
   
      <div id="carouselExampleIndicators" className="carousel slide carousel-dark ">
      <h1 className="text-center text-danger">Sextant -  User IP Dashboard(Powered by ipify)</h1>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <DataCard version="IPv4" url="https://api.ipify.org?format=json"/>
    </div>
    <div className="carousel-item">
    <DataCard version="Universal IPv4/IPv6" url="https://api64.ipify.org?format=json"/>
    </div>
    
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
