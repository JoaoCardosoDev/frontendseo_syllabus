import { useEffect, useState } from "react";

export default function Counter() {

    const [counter, setCounter] = useState(0)

    const [toggle, setToggle ] = useState(true)

    function increment() {
        setCounter(counter => counter + 1)
    }
    function subtract() {
        setCounter(counter => counter - 1)
    }
    function reset() {
        setCounter(0)
    }

    function buttonToggle() {
        setToggle(toggle => !toggle)
    }

    useEffect(() => {
        const interval = toggle ? setInterval(() => {
                increment();
            }, 1000) 
            : null; 

            return () => clearInterval(interval);
    }, [toggle]);

    // useEffect(
    //     () => {counter == 0 ? '' : console.log("Adicionou!!")}, [counter]
    // )
    const style = {
        backgroundColor: toggle ? 'rgb(255, 92, 17)' : 'gray',
    };
  return (
    <div>
        <h1>Counter</h1>
        <h2>{counter}</h2>
        <button onClick={increment}>Add</button>
        <button onClick={buttonToggle} style={style}>Power</button>
        <button onClick={reset}>Reset</button>
        <button onClick={subtract}>Subtract</button>

    </div>
  )
}
