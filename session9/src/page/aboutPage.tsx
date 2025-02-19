import React, { useContext, useState } from 'react'
import { ThemeContext } from '../components/ThemeContext'

export default function aboutPage() {
    const [theme, setTheme] = useContext(ThemeContext)
  return (
    <div>
        <button onClick={() => setTheme(!theme)}>Toggle Theme</button>
    </div>
  )
}
