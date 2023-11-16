import React from 'react';
import { NavLink } from 'react-router-dom';
import OurAllService from './OurAllService';

function ServiceArea(props) {
    return (
        <div>
              <div style={{padding:"100px 0", background:'#F8F9FC', }} className='container-fluid'>
                <div className='container'>
                    <h2>Our Service</h2>
                    <NavLink style={{textDecoration:'none', color:'black'}} to='/'>Home</NavLink> <span>&#8250;</span> <NavLink style={{textDecoration:'none', color:'#20B15A'}} to='/service'>Our Service</NavLink>
                </div>
            </div>
            <OurAllService/>
        </div>
    );
}

export default ServiceArea;