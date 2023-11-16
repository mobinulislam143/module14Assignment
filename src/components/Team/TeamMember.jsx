import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './teamMember.css';

function TeamMember(props) {
    const [data, setData] = useState(null)
    useEffect(() => {
    (async()=>{
        try{
            let res = await fetch('Database/data.json')
            let jsonData = await res.json()
            setData(jsonData)
        }catch(err){
            console.log(err)
        }
    })()
    },[])
    if(!data){
        return <div style={{textAlign: "center"}}>Loading...</div>
    }
    return (
        <div>
            <div className='container'>
                <p id='titlebar' >Our Team Member</p>
                <h2 >Check our awesome team members</h2>
                <div className='row'>
                   {data.database[1].team.teamMember.map((item,index) =>(
                    <div className='col-md-4 rounded-2 border-0 my-4' key={index}>
                        <div className='card shadow rounded-2'>
                            <img src={item.img}  />
                            <div className='social-icons-overlay'>
                                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"> <FaFacebook /></a>
                                <a className='mx-2' href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"> <FaTwitter /> </a>
                                <a  href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><FaInstagram /> </a>
                            </div>
                            <h3 className='text-center my-4'>{item.title}</h3>
                            </div>
                        <div/>
                        </div> 
                   ))}
                </div>
            </div>
        </div>
    );
}

export default TeamMember;

{/* */}