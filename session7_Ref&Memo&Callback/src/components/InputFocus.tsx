import React, { useRef } from 'react'

export default function InputFocus() {
    const inputRef = useRef(null)
  return (
    <div>
        <input ref={inputRef} type='text' />
        <button onClick={() => inputRef.current.focus()}>Focar</button>
    </div>
  )
}
