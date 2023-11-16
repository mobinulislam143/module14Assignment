import React, { useEffect, useState } from 'react';

function TestomonialList(props) {
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
    return (
        <div>
            <div className='container'>
                <div className='titleArea' style={{margin: "60px 0"}}>
                    <p style={{color:'#20B15A'}}>Testimonial List</p>
                    <h2 style={{width:"495px", fontWeight:"bold", fontSize:"30px"}}>Better Agency/SEO Solution At Your Fingertips</h2>
               </div>
               <div className='row my-4'>
                    
                    {data.database[4].testomonial.map((item,index)=>(
                        <div className='col-md-4 p-4' key={index}>
                        <div className='card shadow rounded-2 border-0 my-4 text-center p-4'>
                            <img src={item.img} style={{width:'100px', margin:'auto'}} alt={`Image ${index+1}`} />
                            <p style={{lineHeight:'26px',margin:'10px 0', color:'#9D9D9D', fontSize:'16px'}}>{item.desc}</p>
                            <h4 style={{fontWeight:'600', fontSize:'26px'}}>{item.title}</h4>
                            <p>{item.position}</p>
                        </div>
                    </div>
                    ))}

               </div>
            </div>
        </div>
    );
}

export default TestomonialList;