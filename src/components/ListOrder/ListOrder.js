import React from 'react';
import './ListOrder.css'
const ListOrder = (props) => {
    
    const {listOrder} = props
    
    let time = 0;
    for(const list of listOrder){
        time = time + list.time
        // console.log(list)   
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
            <button><span>10</span>s</button>
            <button><span>20</span>s</button>
            <button><span>30</span>s</button>
            <button><span>40</span>s</button>
            <button><span>50</span>s</button>
        </div>
       </div>
       <div className="exercise-details">
        <h3>ExerCise Details</h3>
        <div className="exercise-time">
            <h5> Exercise Time</h5>
            <p></p>
        </div>
        <div className="break-time">
        <h5>Break Time</h5>
            <p><span>{time}m</span></p>
        </div>
       </div>
       <button className='button'>Activity Completed</button>
        </div>
    );
};

export default ListOrder;