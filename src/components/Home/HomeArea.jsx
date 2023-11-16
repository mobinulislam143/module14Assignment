import React, { useEffect, useState } from 'react';
import Counter from './Counter';
import FeateredProject from './FeateredProject';
import WorkList from './WorkList';
import img1 from '../../../public/home/Rectangle 1241.png'
import img2 from '../../../public/home/Rectangle 1242.png'
import img3 from '../../../public/home/Rectangle 1243.png'
import img4 from '../../../public/home/Rectangle 1244.png'

function HomeArea(props) {
    const [ data, setData] = useState(null)

    useEffect(() => {
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
       <>
         <div className='homeArea' style={{background:'linear-gradient(#D7F5DC,#D7F5DC)', position:"relative"}}>
        
            <div className='container' style={{padding:"40px 0 170px 0"}}>
                <div className='row align-items-center' >
                    <div className='col-md-6 '>
                        <h1 style={{fontWeight:"700", width: "72%"}}>Increase Your Customers Loyalty and Satisfaction</h1>
                        <p>We help businesses like yours earn more customers, standout from competitors, make more money</p>
                        <button className='btn btn-success mt-3'>Get Started</button>
                    </div>
                    <div className='col-md-6 '>
                        <div className='row'>
                            <div className='col-md-8'>
                                <img  src={img1} alt="Image 1" className="img-fluid"/>
                            </div>
                            <div className='col-md-4'>
                                <img  src={img2} alt="Image 2" className="img-fluid"/>
                            </div>
                           
                        </div>
                        <div className='row '>
                             <div className='col-lg-6 mt-3 '>
                                <img src={img3} alt="Image 3" className="img-fluid"/>
                            </div>
                            <div className='col-lg-6 mt-3 px-0'>
                                <img  src={img4} alt="Image 4" className="img-fluid"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-light p-10 w-100' style={{position:"absolute", bottom:"4%"}}>
               <div className='container justify-content-center'>
               <div className='row'>
                {data.database[0].home.company.map((item, index) => (
                    <div className='col-md-2 p-4 d-flex justify-content-center' key={index}>
                    <img src={item.img} alt={`Image ${index + 1}`} className="img-fluid d-flex justify-content-center" />
                    </div>
                ))}
                </div>
               </div>
            </div>            
        </div>
        <WorkList/>
        <Counter/>
        <FeateredProject/>
        
       </>
        
    );
}

export default HomeArea;