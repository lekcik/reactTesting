import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function countHandler(change, symbol) {
        let res;
        if (symbol === '-') {
            res = count - change;
        } else if (symbol === '+') {
            res = count + change;
        } else if (symbol === '*') {
            res = 0; 
        }
        setCount(res);
    }

    return (
        <div className="mainContainer">
            <span>Count: {count}</span>
            <div>
                <button onClick={() => countHandler(1, '-')}>Decrement</button>
                <button onClick={() => countHandler(0, '*')}>Clear</button>
                <button onClick={() => countHandler(1, '+')}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;
