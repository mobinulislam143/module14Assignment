import React from 'react';

function SubscribeArea() {
  return (
    <div>
      <div className='container text-center my-5'>
        <div style={{width:"516px", margin: "auto"}} className='subscribe text-center'>
          <h6 style={{color:"#20B15A", fontWeight:"600"}}>SUBSCRIBE</h6>
          <h2 style={{fontWeight:"bold"}}>Subscribe to get the latest news about us</h2>
          <p style={{color: "#8B8B8B"}}>Please drop your email below to get daily update about what we do</p>
        </div>
        <div class="input-group" style={{position: 'relative', width:'58%', margin:'auto',}}>
          <input type="text" style={{padding:'10px 3px'}} className="form-control" placeholder="Type something..." aria-label="Type something..." aria-describedby="button-addon" />
          <button style={{position:'absolute', top:'0', right:'0', background:'#F55F1D', color:'#fff', padding:'10px 0', width:'140px', borderRadius:'7px'}} className="btn " type="button" id="button-addon">Button</button>
        </div>

      </div>
    </div>
  );
}

export default SubscribeArea;