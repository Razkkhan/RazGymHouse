import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='main'>
            <div className="div-1">
            <div className='desc-cart'>
            <h2 className='titles'>Question no 01:</h2> 
           <h3 className='titles'>How does react work?</h3>
            </div>
           <p>Ans: ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <br />
            <br />
            <div className="div-2">
            <div className='desc-cart'>
            <h2 className='titles'>Question no 02:</h2>
            <h3 className='titles'>Difference between props and state in react</h3>
            </div>
            <p>Ans: Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.</p>
            </div>
            <br />
            <br />
            <div className="div-3">
                <div className='desc-cart'>
                <h2 className='titles'>Question no 03:</h2> 
            <h3 className='titles'>
            Difference between props and state in react
            </h3>
                </div>
            <p>Ans: Running once on mount: fetch API data
                1. Running on state change: validating input field,
                2. Running on state change: live filtering,
                3. Running on state change: trigger animation on new array value,
                4. Running on props change: update paragraph list on fetched API data update,
                5. Running on props change: updating fetched API data to get BTC updated price,</p>
            </div>
        
        </div>
    );
};

export default Question;