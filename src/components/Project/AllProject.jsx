import React, { useEffect, useState } from 'react';

function AllProject(props) {
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
            <div className='container my-4'>
                <p id='titlebar' >All Project</p>
                <h2 >Better Agency/SEO Solution At Your Fingertips</h2>
                <div className='row'>
                   
                    {data.database[3].project.map((item,index)=>(
                        <div className='col-md-6' key={index}>
                        <div className='card shadow rounded-2 border-0 p-4 my-4'>
                            <img src={item.img} />
                            <h2 style={{fontSize:'26px', margin:'8px 0'}}>{item.title}</h2>
                        </div>
                    </div> 
                    ))}
                </div>
            </div>
        </div> 
    );
}

export default AllProject;