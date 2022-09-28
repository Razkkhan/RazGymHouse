import React, { useEffect, useState } from 'react';
import './Body.css'
import Card from '../Card/Card';

const Body = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(fakeData => setData(fakeData)
        )
    },[])
    return (
        <div className='container'>
            <div className="card-container">
               
            {
                data.map(data => <Card cart={data} key={data.id}></Card>)
            }
            </div>
            <div className="list-container">
            <h1>hello</h1>
            </div>
        </div>
    );
};

export default Body;