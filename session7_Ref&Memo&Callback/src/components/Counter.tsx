import React, { useEffect, useRef, useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0); 
    const previousCounter = useRef(0);

    useEffect(() => {
        previousCounter.current = counter; 
    }, [counter]);

    return (
        <div>
            <p>Actual: {counter}</p>
            <p>Anterior: {previousCounter.current}</p>
            <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
        </div>
    );
}