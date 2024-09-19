import { useState, useEffect } from 'react';
import '../css/Counter.css'

function Counter() {
    let [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            addCount();
        }, 1000);

        
        return () => clearInterval(interval);
    }, []); 

    useEffect(() => {
        document.title = `${count}`
    }, [count])

    function addCount() {
        setCount((c) => c + 1);
    }

    return (
        <>
            <section className="counter">
                <span>{count}</span>
            </section>
        </>
    );
}

export default Counter;
