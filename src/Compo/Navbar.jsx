'use client'
import React from "react";
import { Navbar, NavbarBrand, NavbarContent, Input, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo.jsx";
import { SearchBar } from "./SearchBar.jsx";
import DarkModeIcon from "./DarkmodeIcon.jsx";
import { useGlobal } from "../Context/GlobalProviders.jsx";
import Link from "next/link.js";

export default function NavbarCompo() {

    let { isDarkMode, setIsDarkMode, setDarkMode } = useGlobal();

    return (
        <Navbar isBordered>
            <NavbarContent justify="start">
                <NavbarBrand className="mr-4">
                    <Link href="/">
                        <div className="flex flex-row items-center">
                            <AcmeLogo />
                            <p className="hidden sm:block font-bold text-inherit">GrowwStocks</p>
                        </div>
                    </Link>
                </NavbarBrand>

            </NavbarContent>

            <SearchBar />

            {/* icon */}
            <div className="flex gap-4 items-center">
                <Button isIconOnly aria-label="Like" onClick={() => setDarkMode()}>
                    <DarkModeIcon />

                </Button>
            </div>
        </Navbar>
    );
}
