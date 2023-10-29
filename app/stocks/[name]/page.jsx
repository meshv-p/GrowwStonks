'use client'
import NavbarCompo from '@/src/Compo/Navbar'
import React from 'react'
import { Card, CardHeader, CardBody, Avatar, Image, Divider, Chip, Progress, Tabs, Tab } from "@nextui-org/react";
import StockLineChart from '@/src/Compo/stocks/StockLineChart';
import { useParams } from 'next/navigation';


const StockDetail = async ({ params }) => {

    const data = await getStockDetails();
    const stats = [
        { name: 'Market Cap', stat: convertToNumber(data.MarketCapitalization) },
        { name: 'P/E Ratio', stat: data.PERatio },
        { name: 'Beta', stat: data.Beta },
        { name: 'Dividend Yield', stat: data.DividendYield + '%' },
        { name: 'Profit Margin', stat: data.ProfitMargin },
    ]


    function convertToNumber(MarketCapitalization) {
        let num = parseInt(MarketCapitalization);

        switch (true) {
            case num >= 1000000000000:
                return (num / 1000000000000).toFixed(2) + "T";
            case num >= 1000000000:
                return (num / 1000000000).toFixed(2) + "B";
            case num >= 1000000:
                return (num / 1000000).toFixed(2) + "M";
            case num >= 1000:
                return (num / 1000).toFixed(2) + "K";
            default:
                return num;
        }
    }

    return (
        <>

            <NavbarCompo />


            <div className="container mx-auto w-10/12 my-5 flex flex-col gap-4 justify-center items-center">

                <Card className="w-10/12  shadow-none">
                    <CardHeader className="justify-between">
                        <div className="flex gap-5">
                            <Avatar className="w-20 h-20 bg-transparent" isBordered src="https://assets-netstorage.groww.in/stock-assets/logos/GSTK543257.png" >

                            </Avatar>
                            <div className="flex flex-col gap-1 items-start justify-center">
                                <h4 className="text-large font-bold leading-none ">{data.Name}</h4>
                                <h5 className="text-small tracking-tight ">AAP,commun stok</h5>
                                <h5 className="text-small tracking-tight text-default-800">{data.Exchange}</h5>
                            </div>
                        </div>
                        <div className="price">

                            <small className="text-gray-500 text-medium mt-2">${data.AnalystTargetPrice}</small>
                            <h4 className={`font-bold text-medium ${parseFloat(data.OperatingMarginTTM) > 0 ? 'text-green-600' : 'text-red-600'}`}>{parseFloat(data.OperatingMarginTTM) > 0 ? <span > + {data.OperatingMarginTTM} &#11205; </span> : <span>- {data.OperatingMarginTTM} &#11206; </span>}</h4>
                        </div>

                    </CardHeader>

                </Card>

                {/* Stock graph */}
                <StockLineChart data={data} />
                <div className="tabs">
                    <Tabs key="1" color="default" aria-label="Tabs colors" radius="full">
                        <Tab key="1D" title="1D" />
                        <Tab key="1W" title="1W" />
                        <Tab key="1M" title="1M" />
                        <Tab key="3M" title="3M" />
                        <Tab key="6M" title="6M" />
                        <Tab key="1Y" title="1Y" />
                    </Tabs>
                </div>

                {/* Stock graph */}


                {/* About stocks */}

                <Card className=" w-10/12 shadow-none">
                    <CardHeader className="flex gap-3">

                        <div className="flex flex-col">
                            <p className="text-md font-bold">About {data.Name}</p>
                        </div>
                    </CardHeader>
                    <Divider />

                    <CardBody>






                        {/* <p>Make beautiful websites regardless of your design experience.</p> */}
                        <p>{data.Description}</p>


                        {/* chips start*/}
                        <div className="flex gap-2 my-3">

                            <Chip variant="flat" color="warning">Industry: {data.Industry} </Chip>
                            <Chip variant="flat" color="warning">Sector: {data.Sector}</Chip>
                        </div>
                        {/* chips end */}


                        {/* 52 */}
                        <div className="indicator flex flex-row justify-between items-center">

                            <div className="flex gap-5 flex-row">

                                <div className="flex flex-col gap-1 items-start justify-center">
                                    <h4 className="text-large font-bold leading-none ">52WeekLow</h4>
                                    <h5 className="text-small tracking-tight ">{data['52WeekLow']}</h5>
                                </div>
                            </div>
                            <Progress color="default" aria-label="Loading..." label={`current Price:$${data['AnalystTargetPrice']}`} value={((data['AnalystTargetPrice'] - data['52WeekLow']) / (data['52WeekHigh'] - data['52WeekLow'])) * 100} className="max-w-md" />
                            <div className="stock flex flex-col items-center justify-center w-auto">


                                {/* <StockPriceChart lowPrice={data['52WeekLow']} highPrice={data['52WeekHigh']} currentPrice={data['AnalystTargetPrice']} /> */}

                            </div>
                            <div className="price">


                                <h4 className="text-large font-bold leading-none ">52WeekHigh</h4>
                                <h5 className="text-small tracking-tight ">{data['52WeekHigh']}</h5>
                            </div>
                        </div>
                        {/* 52 */}


                        {/* stat */}
                        <div className='states my-5'>
                            <dl className="mt-5 rounded-lg  overflow-hidden shadow divide-y divide-gray-200  md:divide-y-0 md:divide-x flex flex-row items-center justify-around">
                                {stats.map((item) => (
                                    <div key={item.name} className="px-4 py-5 sm:p-6">
                                        <dt className="text-base font-normal text-gray-900 dark:text-white">{item.name}</dt>
                                        <dd className="mt-1 flex justify-between items-baseline md:block lg:flex">
                                            <div className="flex items-baseline text-sm font-semibold ">
                                                {item.stat}

                                            </div>


                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>


                    </CardBody>
                    <Divider />

                </Card>



                <div>{params.name}</div>

            </div >

        </>


    )
}

export default StockDetail

async function getStockDetails() {
    let { name } = useParams();


    const res = await fetch('https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo', { cache: 'force-cache' }, { next: { revalidate: 3600 } })
    // const res = await fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${name}&apikey=${process.env.API_KEY}`, { cache: 'force-cache' }, { next: { revalidate: 3600 } })
    // const res = await fetch('https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=2Q1KLI5OMFIJ8P6P')
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    // console.log(res.json())

    return res.json()
}