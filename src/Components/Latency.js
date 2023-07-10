import React, { useState } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";


export default function Latency() {
  
  var mystyle1={
    'margin' : '0 auto',
    'maxWidth' : '60%'
  }
    const [Latency,setLatency]=useState(0);
    const handleClick= async()=> {
        const client = new W3CWebSocket('ws://localhost:55455');
        client.onmessage = (message) => {
            setLatency(new Date().getTime() - message.data)
        };
    }
  return (
    <div style={mystyle1}>
      <h1 className="text-lg">Latency Component</h1>
     

  <div className="card-body" >
    <h5 className="card-title">User Latency Measure</h5>
    <p className="card-text">Latency : {Latency}</p>
    <a href="#" className="btn btn-primary" onClick={handleClick }>Measure Latency</a>
  </div>
</div>
  
  )
}
