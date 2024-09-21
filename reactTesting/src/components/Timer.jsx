import { useState, useEffect, useRef } from "react";

function Timer() {
    let [timePassed, setTimePassed] = useState(0);
    let prevTimeRef = useRef(Date.now());
    let interval = useRef();

    function start() {
        if(!interval.current) {
            interval.current = setInterval(() => {
                const currTime = Date.now();
                const elapsed = currTime - prevTimeRef.current;
    
                setTimePassed((t) => t + elapsed);
                prevTimeRef.current = currTime;
            }, 10)
            console.log('interval added');
        }
    }

    function stop() {
        clearInterval(interval.current);
        interval.current = null;
    }

    return (
        <section className="timer">
            <p>{timePassed / 1000}</p>
            <button onClick={start}>Start</button>
            <button>Restart</button>
            <button onClick={stop}>Stop</button>
        </section>
    );
}

export default Timer;
