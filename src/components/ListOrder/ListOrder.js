import React, { useState } from 'react';
import './ListOrder.css'
const ListOrder = (props) => {
    
    const {listOrder} = props
    
    let time = 0;
    for(const list of listOrder){
        time = time + list.time
        // console.log(list)   
    }


    const [BreakTime, setBreakTime] = useState(0)


    const handleBreakTime = (second) => {
        setBreakTime(second)
        
    }


    return (
        <div className='list-class'>
        <div className='about-me'>
            <h3>Yeasin Arafat</h3>
            <p>Junior Web Developer</p>
            <p>Age: 22</p>
        </div>
       <div className="add-break">
        <h4>Add a Break</h4>
        <div>
            <button onClick={()=>{
                handleBreakTime(10)
            }}><span>10</span>s</button>
            <button onClick={()=>{
                handleBreakTime(20)
            }}><span>20</span>s</button>
            <button onClick={()=>{
                handleBreakTime(30)
            }}><span>30</span>s</button>
            <button onClick={()=>{
                handleBreakTime(40)
            }}><span>40</span>s</button>
            <button onClick={()=>{
                handleBreakTime(50)
            }}><span>50</span>s</button>
        </div>
       </div>
       <div className="exercise-details">
        <h3>ExerCise Details</h3>
        <div className="exercise-time">
            <h5> Exercise Time</h5>
            <p>{time}m</p>
        </div>
        <div className="break-time">
        <h5>Break Time</h5>
            <p><span>{BreakTime}s</span></p>
        </div>
       </div>
       <button className='button'>Activity Completed</button>
        </div>
    );
};

export default ListOrder;