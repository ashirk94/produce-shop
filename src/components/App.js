import Layout from './Layout'
import ThemeContext from '../contexts/ThemeContext'
import React, { useState } from 'react'
import Switch from 'react-switch'

function App() {

    const [theme, setTheme] = useState('dark')
    
    const toggleTheme = () =>
    {
        setTheme((cur) => (cur === 'light' ? 'dark' : 'light'))
    }

    
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>

                
        <Layout>
        <Switch className="toggler" onColor='#000000' checked={theme === 'dark' ? true : false} onChange={toggleTheme}/>
        </Layout>

    </ThemeContext.Provider>

  );
}

export default App;
