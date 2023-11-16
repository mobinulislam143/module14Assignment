 import React, { useEffect, useState } from 'react';
 
 function WorkList(props) {
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
           <div className='container' >
               <div className='titleArea' style={{margin: "60px 0"}}>
                    <p style={{color:'#20B15A'}}>WORK LIST</p>
                    <h2 style={{width:"495px", fontWeight:"bold", fontSize:"30px"}}> We provide the Perfect Solution to your business growth</h2>
               </div>
               <div className='row my-4'>
                    {data.database[0].home.workList.map((item, index)=>(
                        <div className='col-md-4 p-4' key={index}>
                            <img src={item.img} style={{width:"94px"}} alt={`Image ${index+1}`} className='image-fluid' />
                            <h4>{item.title}</h4>
                            <p>{item.desc}</p>
                            <a href='#' style={{color:"black", marginTop:'5px', textDecoration:"none"}}>Learn More <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                </svg> </a>
                        </div>
                    ))}
               </div>
           </div>
        </div>
    );
 }
 
 export default WorkList;