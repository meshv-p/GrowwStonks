'use client'
import { Input, NavbarContent, Listbox, ListboxItem, Chip } from '@nextui-org/react'
import { SearchIcon } from "./SearchIcon.jsx";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
    const [isshow, setIsshow] = useState(false)
    const [query, setQuery] = useState('')
    const [searchList, setSearchList] = useState(null)

    let router = useRouter();

    useEffect(() => {
        // Close the suggested search bar when the user clicks outside.
        document.addEventListener("mousedown", (event) => {
            if (!event.target.closest(".suggested-search-bar")) {
                setIsshow(false);
            }
        });

        // Close the suggested search bar when the user clicks on a suggested item.
        const suggestedItems = document.querySelectorAll(".suggested-item");
        suggestedItems.forEach((item) => {
            item.addEventListener("click", () => {
                setIsshow(false);
            });
        });


        // fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=demo`).then(res => res.json())
        // fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=2Q1KLI5OMFIJ8P6P`).then(res => res.json())

        //     .then(data => {

        //         console.log(data)
        //         // setSearchList(data.bestMatches)
        //         setSearchList([{
        //             "1. symbol": "TSCO.LON",
        //             "2. name": "Tesco PLC",
        //             "3. type": "Equity",
        //             "4. region": "United Kingdom",
        //             "5. marketOpen": "08:00",
        //             "6. marketClose": "16:30",
        //             "7. timezone": "UTC+01",
        //             "8. currency": "GBX",
        //             "9. matchScore": "0.7273"
        //         },
        //         {
        //             "1. symbol": "TSCDF",
        //             "2. name": "Tesco plc",
        //             "3. type": "Equity",
        //             "4. region": "United States",
        //             "5. marketOpen": "09:30",
        //             "6. marketClose": "16:00",
        //             "7. timezone": "UTC-04",
        //             "8. currency": "USD",
        //             "9. matchScore": "0.7143"
        //         },
        //         {
        //             "1. symbol": "TSCDY",
        //             "2. name": "Tesco plc",
        //             "3. type": "Equity",
        //             "4. region": "United States",
        //             "5. marketOpen": "09:30",
        //             "6. marketClose": "16:00",
        //             "7. timezone": "UTC-04",
        //             "8. currency": "USD",
        //             "9. matchScore": "0.7143"
        //         },
        //         {
        //             "1. symbol": "TCO2.FRK",
        //             "2. name": "TESCO PLC ADR/1 LS-05",
        //             "3. type": "Equity",
        //             "4. region": "Frankfurt",
        //             "5. marketOpen": "08:00",
        //             "6. marketClose": "20:00",
        //             "7. timezone": "UTC+02",
        //             "8. currency": "EUR",
        //             "9. matchScore": "0.5455"
        //         }])
        //     })
        setSearchList([{
            "1. symbol": "TSCO.LON",
            "2. name": "Tesco PLC",
            "3. type": "Equity",
            "4. region": "United Kingdom",
            "5. marketOpen": "08:00",
            "6. marketClose": "16:30",
            "7. timezone": "UTC+01",
            "8. currency": "GBX",
            "9. matchScore": "0.7273"
        },
        {
            "1. symbol": "TSCDF",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TSCDY",
            "2. name": "Tesco plc",
            "3. type": "Equity",
            "4. region": "United States",
            "5. marketOpen": "09:30",
            "6. marketClose": "16:00",
            "7. timezone": "UTC-04",
            "8. currency": "USD",
            "9. matchScore": "0.7143"
        },
        {
            "1. symbol": "TCO2.FRK",
            "2. name": "TESCO PLC ADR/1 LS-05",
            "3. type": "Equity",
            "4. region": "Frankfurt",
            "5. marketOpen": "08:00",
            "6. marketClose": "20:00",
            "7. timezone": "UTC+02",
            "8. currency": "EUR",
            "9. matchScore": "0.5455"
        }])

        // searchList && searchList.map((item) => {
        //     console.log(item, item['2. name'])
        // })

        return () => {
            document.removeEventListener("mousedown", () => { });
            suggestedItems.forEach((item) => {
                item.removeEventListener("click", () => { });
            });
        };
    }, [query])


    return (
        <>
            <NavbarContent as="div" className=" flex flex-col items-baseline" >
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full mt-2 font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 w-80",
                    }}
                    placeholder="Type to search..."
                    size="md"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                    onClick={() => setIsshow(true)}
                    // onBlur={() => setIsshow(false)}
                    onChange={(e) => setQuery(e.target.value)}
                />
                {
                    isshow &&
                    <div className="bg-white dark:bg-slate-800 shadow  sm:rounded-md" >
                        <ul role="list" className="divide-y divide-gray-200">

                            <div className="w-80 border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
                                {/* chips start*/}
                                <div className="flex gap-2 my-3">

                                    <button>

                                        <Chip variant="flat" color="warning" >All  </Chip>
                                    </button>
                                    <button>
                                        <Chip variant="flat" color="warning">Stocks </Chip>
                                    </button>
                                    <button>

                                        <Chip variant="flat" color="warning">Etfs </Chip>
                                    </button>
                                </div>
                                {/* chips end */}
                                <Listbox
                                    aria-label="Actions"
                                    onAction={(key) => router.push('/stocks/' + key)}
                                >


                                    <ListboxItem description='Appl'
                                    >
                                        Apple
                                    </ListboxItem>

                                    {/* {
                                        searchList && searchList.map((item, index) => (
                                            <>
                                                <ListboxItem key={index} 
                                                              description={item['1. symbol']}

                                                >{item['2. name']}</ListboxItem>
                                            </>
                                        ))
                                    } */}
                                </Listbox>
                            </div>
                        </ul>
                    </div>
                }





            </NavbarContent>
        </>
    )
}
