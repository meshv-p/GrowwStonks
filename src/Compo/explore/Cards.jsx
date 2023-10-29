import React, { useEffect } from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export default function Cards({ stock, is_gainer }) {
    const router = useRouter()
    // useEffect(() => {


    //     console.log(stock, is_gainer, 'card')
    // }, [])

    let imgs = [
        "https://assets-netstorage.groww.in/stock-assets/logos/GSTK543257.png",
        "https://assets-netstorage.groww.in/intl-stocks/logos/GOOGL.png",
        "https://assets-netstorage.groww.in/intl-stocks/logos/AAPL.png",
        "https://assets-netstorage.groww.in/intl-stocks/logos/MSFT.png",
        "https://assets-netstorage.groww.in/intl-stocks/logos/META.png",
        "https://assets-netstorage.groww.in/mf-assets/logos/indiabulls_groww.png"
    ]


    return (


        <div div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-5" >
            {/* // <div className="flex gap-2 flex-wrap"> */}
            {
                stock && stock.map((item, index) => (
                    <Card className="py-4 " key={index} isPressable onClick={() => router.push(`/stocks/${item.ticker}`)} >
                        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl"
                                src={imgs[index % 6]}
                                width={70}
                            />

                        </CardHeader>
                        <CardBody className="overflow-visible py-2">
                            <p className="text-tiny uppercase font-bold">{item.ticker}</p>
                            <small className="text-gray-500 text-medium mt-2">${item.price}</small>
                            <h4 className={`font-bold text-medium ${is_gainer ? 'text-green-600' : 'text-red-600'} `}>{
                                (parseFloat(item.change_percentage.split('%')[0])).toPrecision(4)
                                // item.change_percentage
                            } {is_gainer ? <span> &#11205; </span> : <span>&#11206; </span>}

                            </h4>
                        </CardBody>
                    </Card>
                ))
            }
        </div >
    );
}
