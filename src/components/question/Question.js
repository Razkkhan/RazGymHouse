import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='main'>
            <div className="div-1">
            <div className='desc-cart'>
            <h2 className='titles'>Question no 01:</h2> 
           <h3 className='titles'>Why fitness is important?</h3>
            </div>
           <p>Ans: Fitness is important because it contributes to overall health and well-being. It helps maintain a healthy weight, reduces the risk of chronic diseases, improves cardiovascular health, enhances muscle strength and endurance, boosts energy levels, and promotes mental and emotional well-being. Regular physical activity and fitness are key components of a healthy lifestyle.</p>
            </div>
            <br />
            <br />
            <div className="div-2">
            <div className='desc-cart'>
            <h2 className='titles'>Question no 02:</h2>
            <h3 className='titles'>What are some effective tips for beginners starting at the gym?</h3>
            </div>
            <p>Ans: For gym beginners, effective tips include setting clear fitness goals, starting with light weights and proper form, staying consistent, diversifying workouts, warming up and cooling down, maintaining hydration and nutrition, allowing for rest, considering guidance from a trainer, and listening to your body to prevent overexertion and injuries. These guidelines ensure a safe and rewarding gym experience..</p>
            </div>
            <br />
            <br />
            <div className="div-3">
                <div className='desc-cart'>
                <h2 className='titles'>Question no 03:</h2> 
            <h3 className='titles'>
            What are some common mistakes to avoid when working out at the gym?
            </h3>
                </div>
            <p>Ans: To have a successful and safe gym experience, it's crucial to avoid common mistakes. These include maintaining proper exercise form to prevent injuries, gradually increasing weights to avoid overexertion, incorporating warm-ups and cool-downs for injury prevention and recovery, finding a balance between exercise and rest to avoid overtraining, and staying adequately hydrated to optimize performance and recovery. Avoiding these errors will contribute to a more effective and injury-free gym journey.</p>
            </div>
        
        </div>
    );
};

export default Question;