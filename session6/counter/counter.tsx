import { useState } from "react";

const Counter = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            <div> Value: {counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Add</button>
        </div>
    )
}
export default Counter;