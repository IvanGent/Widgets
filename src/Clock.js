import React, { useState, useEffect } from 'react'

const Clock = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = () => {
      setTime(new Date())
    };
    const interval = setInterval(tick, 1000);

    return () => clearInterval(interval);
  },[]);

  const hour = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const date = time.toDateString();


  return (
    <div className='cd-container'>
      <div className='clock'>
        <h1>Clock</h1>
        <div>{`${hour}:${minutes}:${seconds}`}</div>
      </div>
      <div className='date'>
        <h1>Date</h1>
        <div>{date}</div>
      </div>
    </div>

  )
}

export default Clock
