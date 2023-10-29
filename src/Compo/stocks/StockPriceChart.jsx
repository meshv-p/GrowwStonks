'use client'

import React from 'react';

const StockPriceChart = ({ lowPrice, highPrice, currentPrice }) => {

    const currentPricePosition = ((currentPrice - lowPrice) / (highPrice - lowPrice)) * 100;


    return (
        <div className="stock-price-range">
            <div className="range-bar">
                <div className="line" style={{ left: `${currentPricePosition}%` }}></div>
            </div>
            <div className="prices">
                {/* <div className="low-price">{lowPrice}</div> */}
                <div className="current-price">{currentPrice}</div>
                {/* <div className="high-price">{highPrice}</div> */}
            </div>
        </div>
    );
};

export default StockPriceChart;
