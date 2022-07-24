import React, {useState} from 'react'

const ThemeContext = React.createContext()

export default function ThemeContext() {

    const [darkTheme, setDarkTheme] = useState(true)
  return (
    <div>
        <ThemeContext.Provider value={darkTheme}>
            <button onClick={toggleTheme}>Toggle Theme</button>
        </ThemeContext.Provider>
    </div>
  )
}
