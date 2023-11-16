import React, { useEffect, useState } from 'react';

function FeateredProject(props) {
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
    const featerdData = data.database[0].home.FeaturedProject[0]
    const featerdData1 = data.database[0].home.FeaturedProject[1]
    const featerdData2 = data.database[0].home.FeaturedProject[2]
    const featerdData3 = data.database[0].home.FeaturedProject[3]
    const featerdData4 = data.database[0].home.FeaturedProject[4]
    return (
        <section className='featured' style={{background:'#F0FDF4', padding:'60px 0'}}>
            <div className='container my-4'>
                <p style={{color:'#20B15A'}}>Featured Project</p>
                <h2 style={{width:"495px", fontWeight:"bold", fontSize:"30px", margin:'10px 0'}}>We provide the Perfect Solution to your business growth</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <img className='my-4' style={{width:'100%'}} src={featerdData.img}  alt='image1' />
                        <p style={{margin:'5px 0', color:'#2E3E5C'}}>{featerdData.date}</p>
                        <h4 style={{color:'#2E3E5C', fontWeight:'bold'}}>{featerdData.title}</h4>
                    </div>
                    <div className='col-md-6 mt-4'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img style={{width:'100%'}}  src={featerdData1.img}  alt='image1' />
                                <p style={{margin:'5px 0', color:'#2E3E5C'}}>{featerdData1.date}</p>
                                <h4 style={{color:'#2E3E5C', fontWeight:'bold'}}>{featerdData1.title}</h4>
                            </div>
                            <div className='col-md-6'>
                                <img style={{width:'100%'}}  src={featerdData2.img}  alt='image1' />
                                <p style={{margin:'5px 0', color:'#2E3E5C'}}>{featerdData2.date}</p>
                                <h4 style={{color:'#2E3E5C', fontWeight:'bold'}}>{featerdData2.title}</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <img style={{width:'100%'}}  src={featerdData3.img}  alt='image1' />
                                <p style={{margin:'5px 0', color:'#2E3E5C'}}>{featerdData3.date}</p>
                                <h4 style={{color:'#2E3E5C', fontWeight:'bold'}}>{featerdData3.title}</h4>
                            </div>
                            <div className='col-md-6'>
                                <img style={{width:'100%'}}  src={featerdData4.img}  alt='image1' />
                                <p style={{margin:'5px 0', color:'#2E3E5C'}}>{featerdData4.date}</p>
                                <h4 style={{color:'#2E3E5C', fontWeight:'bold'}}>{featerdData4.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeateredProject;