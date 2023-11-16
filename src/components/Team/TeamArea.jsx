import React from 'react';
import TeamMember from './TeamMember';
import AppNavbar from '../AppNavbar';
import SubscribeArea from '../SubscribeArea';
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

function TeamArea(props) {
    return (
        <div>
            <div style={{padding:"100px 0", background:'#F8F9FC', }} className='container-fluid'>
                <div className='container'>
                    <h2>Team</h2>
                    <NavLink style={{textDecoration:'none', color:'black'}} to='/'>Home</NavLink> <span>&#8250;</span> <NavLink style={{textDecoration:'none', color:'#20B15A'}} to='/team'>Team</NavLink>
                </div>
            </div>
            <TeamMember/>
            
            
        </div>
    );
}

export default TeamArea;