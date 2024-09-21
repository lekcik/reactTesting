import { useState, useEffect, useRef } from "react";

function Timer() {
    let [timePassed, setTimePassed] = useState(0);
    let prevTimeRef = useRef(Date.now());
    let interval = useRef();

    function start() {
        if (!interval.current) {
            prevTimeRef.current = Date.now();
            
            interval.current = setInterval(() => {
                const currTime = Date.now();
                const elapsed = currTime - prevTimeRef.current;
    
                setTimePassed((t) => t + elapsed);
                prevTimeRef.current = currTime;
            }, 10);
            console.log('interval added');
        }
    }

    function stop() {
        clearInterval(interval.current);
        interval.current = null;
    }

    function clear() {
        stop();
        setTimePassed(0);
        prevTimeRef.current = 0;
    }

    function formatTime() {
        const time = timePassed;

        let seconds = time / 1000
        let minutes = 0;

        if (seconds > 60) {
            minutes = Math.floor(seconds / 60);
        }
        seconds = Math.floor(seconds % 60);

        let output = `${minutes}:${seconds}`;
        
        return output;
    }

    return (
        <section className="timer">
            <p>{formatTime()}</p>
            <button onClick={start}>Start</button>
            <button onClick={clear}>Clear</button>
            <button onClick={stop}>Stop</button>
        </section>
    );
}

export default Timer;
