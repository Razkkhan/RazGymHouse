import React, { useEffect, useState } from 'react';
import './Body.css'
import Card from '../Card/Card';
import ListOrder from '../ListOrder/ListOrder';
import { localStorageHandle } from '../storeData/StoreData';


const getLocalItem = () =>{
    let listItem = localStorage.getItem('time')
    if(listItem){
        return JSON.parse(localStorage.getItem('time'))
    } else{
        return []
    }
}
const Body = () => {
    const [data, setData] = useState([]);
    const [listOrder, setListOrder] = useState([]);
    const [BreakTime, setBreakTime] = useState(getLocalItem(0)); 
    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(fakeData => setData(fakeData)
        )
    },[]);

    useEffect(()=>{
        localStorage.setItem('time',JSON.stringify(BreakTime))
    },[BreakTime])

    const handleBreakTime = (second) => {
        setBreakTime(second)
    }


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
            <ListOrder handleBreakTime={handleBreakTime} BreakTime={BreakTime} listOrder={listOrder}></ListOrder>
            </div>
        </div>
    );
};

export default Body;