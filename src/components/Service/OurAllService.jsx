import React, { useEffect, useState } from 'react';

function OurAllService(props) {
    const [data, setData] = useState(null)
    useEffect(()=>{
        (async()=>{
            try{
                const res = await fetch('Database/data.json')
                const jsonData = await res.json()
                setData(jsonData)
            }catch(err){
                return false
            }
        })()
    },[])
    if(!data){
        return <div style={{textAlign: "center"}}>Loading...</div>
    }
    const serviceData = data.database[2].service[0]

    return (
        <div>
           <div className='container'>
            <p style={{color:'#20B15A'}}>Our All Services</p>
                <h2 style={{width:"495px", fontWeight:"bold", fontSize:"30px"}}> We Provide BestWeb design services</h2>
                <div className='row my-4'>
                   
                    {data.database[2].service.map((item,index)=>(
                         <div className='col-md-6' key={index}>
                       <div className='card shadow rounded-2 p-4 border-0 my-4'>
                            <h4 style={{color:'black', fontWeight:'600', fontSize:'26px'}}>{item.title}</h4>
                            <p style={{fontSize:'18px', color:'#9D9D9D',lineHeight:'24px'}}>{item.desc}</p>
                            <div className='row'>
                                <div className='col-md-8'>
                                    <img src={item.img1}  style={{width:'358px'}}/>
                                </div>
                                <div className='col-md-4'>
                                    <img src={item.img2}  style={{width:'176px'}} />
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <img src={item.img3}  style={{width:'257px'}}/>
                                </div>
                                <div className='col-md-6'>
                                    <img src={item.img4}  style={{width:'248px'}} />
                                </div>
                            </div>
                       </div>
                    </div>
                    ))}
                </div>
           </div>
        </div>
    );
}

export default OurAllService;