import React from 'react';
import TestomonialList from './TestomonialList';
import { NavLink } from 'react-router-dom';

function TestomonialArea(props) {
    return (
        <div>
             <div style={{padding:"100px 0", background:'#F8F9FC', }} className='container-fluid'>
                <div className='container'>
                    <h2>Testimonial List</h2>
                    <NavLink style={{textDecoration:'none', color:'black'}} to='/'>Home</NavLink> <span>&#8250;</span> <NavLink style={{textDecoration:'none', color:'#20B15A'}} to='/testomonial'>Testimonial List</NavLink>
                </div>
            </div>
            <TestomonialList/>
        </div>
    );
}

export default TestomonialArea;