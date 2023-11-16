import React from 'react';
import { NavLink } from 'react-router-dom';
import AllProject from './AllProject';

function ProjectArea(props) {
    return (
        <div>
            <div style={{padding:"100px 0", background:'#F8F9FC', }} className='container-fluid'>
                <div className='container'>
                    <h2>All Project</h2>
                    <NavLink style={{textDecoration:'none', color:'black'}} to='/'>Home</NavLink> <span>&#8250;</span> <NavLink style={{textDecoration:'none', color:'#20B15A'}} to='/project'>All Project</NavLink>
                </div>
            </div>
                <AllProject/>
        </div>
    );
}

export default ProjectArea;