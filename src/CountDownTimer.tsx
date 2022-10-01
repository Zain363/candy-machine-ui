import React from 'react'
import { useEffect } from 'react';

interface ICountdown {
    // hours: number;
    // minutes: number;
    seconds: number;
}

const CountDownTimer = ({  seconds = 60 }: ICountdown) => {
    

    const [time, setTime] = React.useState<ICountdown>({ seconds});
    

    const tick = () => {
   
        if ( time.seconds === 0) 
            reset()
        // else if (time.seconds === 0) {
        //     setTime({ seconds: 59});
        // } else if (time.seconds === 0) {
        //     setTime({ seconds: 59});
         else {
            setTime({ seconds: time.seconds - 1});
        }
    };


    const reset = () => setTime({ seconds: time.seconds});

    
    React.useEffect(() => {
        const timerId = setInterval(() => tick(), 500);
        return () => clearInterval(timerId);
    });

    useEffect(() => {
        const data = window.localStorage.getItem('MY_APP_STATE');
        if ( data !== null ) setTime(JSON.parse(data));
      }, []);
    
      useEffect(() => {
        window.localStorage.setItem('MY_APP_STATE', JSON.stringify(time));
      }, [time]);

      
    return (
        <div>
            <p>{`${time.seconds.toString()
            }`}</p> 
        </div>
    );
}

export default CountDownTimer;
