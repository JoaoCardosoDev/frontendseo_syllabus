import React, { useContext, useEffect } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemeButton() {
    const { theme, setTheme } = useContext(ThemeContext)
    
    useEffect(() => {
        document.body.style.backgroundColor = theme === "light" ? "#ffffff" : "#333333";
        document.body.style.color = theme === "light" ? "#000000" : "#ffffff";
        console.log(`changed theme to `+theme)
    }, [theme]);
    
    return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change Theme (Current theme: {theme})
    </button>
  )
}
