import React from 'react'
import { useGlobal } from './Context/GlobalProviders'

const App = ({ children }) => {

    let { isDarkMode } = useGlobal()


    return (

        <main className={`${isDarkMode ? 'dark' : ''} text-foreground bg-background  `}>
            {children}
        </main>
    )
}

export default App