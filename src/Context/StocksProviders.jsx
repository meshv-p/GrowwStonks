"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'

const StockContext = createContext()

export const useStocks = () => useContext(StockContext)

export const StocksProvider = ({ children }) => {

    const [stocks, setStocks] = useState([])

    let value = {
        // states
        stocks,
        setStocks

    }

    return (
        <StockContext.Provider value={value}>{children}</StockContext.Provider>
    )
}
