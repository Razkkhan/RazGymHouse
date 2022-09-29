import React, { useEffect, useState } from 'react';
import './Body.css'
import Card from '../Card/Card';
import ListOrder from '../ListOrder/ListOrder';
import ap from './ap.png'

const Body = () => {
    const [data, setData] = useState([])
    
    const [listOrder, setListOrder] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(fakeData => setData(fakeData)
        )
    },[]);

    const handleAddButton = (props) =>{
        const newList = [...listOrder, props]
        setListOrder(newList)
        
        
    }

    return (
        <div className='container'>
            
            <div className="card-container">
               
            {
                data.map(data => <Card cart={data} key={data.id} handleAddButton={handleAddButton}></Card>)
            }
            </div>
            <div className="list-container">
            <ListOrder listOrder={listOrder}></ListOrder>
            </div>
        </div>
    );
};

export default Body;