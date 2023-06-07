import React, { useState } from 'react'

export default function DataCard(props) {
  const [IP,setIP]=useState("");
  const getIP= async()=>{
 
    let url=props.url;
    let data=await fetch(url);
    let parsedData= await data.json();
    console.log(1)
    setIP(parsedData.ip);
    console.log(IP)  

    
   }

  var mystyle={
    'align' : 'center',
    'maxWidth' : '60%'
  }
  return (
   
    <div className="container center my-5" style={mystyle} onLoad={getIP}>
      <div className="card text-bg-warning mb-3">
  <div className="card-header"><h5 className="card-title">User's IPv{props.version} address</h5></div>
  <div className="card-body">
    
    <p className="card-text">{IP}</p>
  </div>
    </div>
 
    </div>

  )
}
