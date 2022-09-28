import React, { useEffect, useState } from 'react';

const Body = () => {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('data.json')
    },[])
    return (
        <div>
            
        </div>
    );
};

export default Body;