import React from 'react';
import './ListOrder.css'
const ListOrder = () => {
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
        </div>
    );
};

export default ListOrder;