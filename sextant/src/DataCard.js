import React from 'react'

export default function DataCard() {
  var mystyle={
    'align' : 'center',
    'max-width' : '60%'
  }
  return (
    <div className="container center my-5" style={mystyle}>
      <div class="card text-bg-warning mb-3">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Warning card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
    </div>
    </div>
  )
}
