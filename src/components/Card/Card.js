import './Card.css'
import React from 'react';

const Card = (props) => {
    // console.log(props.cart)
    const {img,category, description,age, time } = props.cart
    
    return (
        <div className='cards'>
            <img src={img} alt="" />
            <div className='desc'>
            <h3>{category}</h3>
            <small>{description}</small>
            <p>
                For Age: {age}
            </p>
            <p>
               Time required: {time}
            </p>
            </div>
           
            <button className='btn'>Add To List</button>
    
        </div>
    );
};

export default Card;