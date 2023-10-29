"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

const GlobalContext = createContext()

export const useGlobal = () => useContext(GlobalContext)

export const GlobalProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false)


    useEffect(() => {

        let isDarkMode = localStorage.getItem('isDarkMode')
        if (isDarkMode === 'true') {
            setIsDarkMode(true)
        }
        else {
            setIsDarkMode(false)
        }

    }, [])

    function setDarkMode() {
        setIsDarkMode(!isDarkMode)
        localStorage.setItem('isDarkMode', !isDarkMode)
    }

    let value = {
        // states
        isDarkMode,
        setIsDarkMode,
        // function
        setDarkMode

    }

    return (
        <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
    )
}
