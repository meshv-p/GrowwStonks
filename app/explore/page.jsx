
import NavbarCompo from '@/src/Compo/Navbar'
import React from 'react'
import TabsCompo from '@/src/Compo/explore/Tabs';


const explore = async () => {

    // let { setStocks } = useStocks();

    const data = await getStocks();

    // setStocks(data);


    return (
        <div>
            <NavbarCompo />

            <TabsCompo data={data} />



        </div>
    )
}

export default explore


async function getStocks() {
    const res = await fetch(`https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.API_KEY}`, { cache: 'force-cache' }, { next: { revalidate: 3600 } })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json()
}