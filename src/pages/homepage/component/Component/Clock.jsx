import React, { useState, useEffect } from 'react';
import "./Clock.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const formattedTime = `${time.getHours()}:${time.getMinutes()}`;
  function getGreeting(){

  }

  const getSomeGreeting = () => {
    
  }
  
  return (
    <div className='clockk'>
      <p> {formattedTime} </p>
    </div>
    
  );
};

export default Clock;

