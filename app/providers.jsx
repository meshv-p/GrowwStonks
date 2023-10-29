'use client'

import App from '@/src/App'
import { GlobalProvider, useGlobal } from '@/src/Context/GlobalProviders'
import { StocksProvider } from '@/src/Context/StocksProviders'
import { NextUIProvider } from '@nextui-org/react'

export function Providers({ children }) {



    return (
        <NextUIProvider>
            <GlobalProvider >
                <StocksProvider>
                    <App >
                        {children}
                    </App>
                </StocksProvider>
            </GlobalProvider>

        </NextUIProvider>
    )
}