import React, { useMemo, useState } from 'react'


export default function HeavyCalc() {
    const [counter, setCounter] = useState(0)

    const heavyNumber = useMemo(() => {
        console.log("Calculating...")
        return counter *2
    }, [counter])
    return (
    <>
    <div>Reultado: {heavyNumber}</div>
    <button onClick={() => {setCounter(counter + 1)}}>Increment</button>
    </>
  )
}
