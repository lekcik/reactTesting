import { useState, useEffect } from "react";

function Clock() {
    let [time, setTime] = useState(new Date());

    useEffect(() => {  
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="clock">
            <p>{time.toLocaleTimeString()}</p>
        </section>
    );
}

export default Clock;
