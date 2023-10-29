'use client'
import React, { useEffect } from "react";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Cards from "./Cards";

export default function TabsCompo({ data }) {


    // useEffect(() => {

    //     console.log(data)

    // }, [])


    return (
        <div className="container mx-auto w-10/12 my-5">
            <Tabs aria-label="Options container">
                <Tab key="photos" title="Top Gainers">
                    <Card>
                        <CardBody>
                            <Cards stock={data.top_gainers} is_gainer={true} />
                        </CardBody>

                        {/* load more */}
                        <div className="flex flex-col items-center justify-center">
                            <span>Load More</span>
                            <span>&#129155;</span>
                        </div>
                    </Card>
                </Tab>
                <Tab key="music" title="Top Losers">
                    <Card>
                        <CardBody>
                            <Cards stock={data.top_losers} is_gainer={false} />
                        </CardBody>
                        {/* load more */}
                        <div className="flex flex-col items-center justify-center">
                            <span>Load More</span>
                            <span>&#129155;</span>
                        </div>
                    </Card>
                </Tab>

            </Tabs>
        </div>
    );
}
