import React, { useEffect, useState } from 'react';

function Counter(props) {

    const [data, setData] = useState(null)
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await fetch('Database/data.json')
                const jsonData = await res.json()
                setData(jsonData)
            }catch(err){
                console.error('Error fetching data:', err);
              }
        }
        fetchData();
    },[])
    if(!data){
        return <div style={{textAlign: "center"}}>Loading...</div>

    }
    return (
        <div>
            <div className='container my-4'>
                <div className='row my-4'>
                {data.database[0].home.counter.map((item, index) => (
            <div className='col-md-3' key={index}>
              <div className='card shadow rounded-2 border-0 my-4 text-center p-4'>
                <img src={item.img} style={{width:"100px", margin:"auto"}} alt={`Image ${index + 1}`} />
                <strong className='fs-6'>{item.count}</strong>
                <p>{item.title}</p>
              </div>
            </div>
          ))}
                   
                </div>
            </div>
        </div>
    );
}

export default Counter;