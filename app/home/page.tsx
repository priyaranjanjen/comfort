"use client"

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LuAlignHorizontalJustifyStart, LuListFilter } from "react-icons/lu";
import Sidebar from "../components/sidebar/Sidebar";
import { GrAdd } from "react-icons/gr";
import Image from "next/image";
import profile from '@/public/profile.png'
import SearchBar from "../components/ui/SearchBar";
import MenuButton from "./MenuButton";
const Map = dynamic(() => import("../components/map/Map"), { ssr: false });


const Page = () => {
    const [isOpen, setIsOpen] = useState(false);

    const OpenSidebar = () => setIsOpen(!isOpen)
    return (
        <div className="h-screen w-full relative overflow-hidden">
            {/* Top Navigation Bar */}
            <div className="absolute top-4 left-0 right-0 px-4 flex justify-between items-center z-1000 pointer-events-none">
                {/* Toggle Button */}
                <div className="pointer-events-auto flex items-center gap-3">
                    <button
                        onClick={OpenSidebar}
                        className="flex items-center justify-center cursor-pointer bg-white border border-gray-200 rounded-lg shadow-md p-2 hover:bg-gray-50 hover:scale-90 hover:shadow-2xl transition-all"
                        aria-label="Toggle filters"
                    >
                        <div className="relative w-[22px] h-[22px] flex items-center justify-center">
                            <LuAlignHorizontalJustifyStart
                                size={22}
                                className={`absolute text-gray-700 transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
                            />
                            <GrAdd
                                size={22}
                                className={`absolute text-gray-700 transition-all duration-300 ${isOpen ? 'opacity-100 rotate-45 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
                            />
                        </div>
                    </button>
                    <h1 className="text-[1.8rem] font-extrabold text-[#28282B] tracking-tighter flex items-start leading-none">
                        comfort<span className="text-[0.8rem] font-semibold ml-0.5 mt-1">™</span>
                    </h1>
                </div>

                {/* Search Bar */}
                <div className="pointer-events-auto flex-1 max-w-md mx-4">
                    <SearchBar />
                </div>

                {/* Profile Button */}
                <div className="pointer-events-auto flex items-center gap-3">
                    <div className="relative rounded-full h-10 w-10 shadow-md">
                        <Image
                            src={profile}
                            alt="profile"
                            fill
                            sizes="80px"
                            className="object-cover rounded-full"
                        />
                    </div>
                    <MenuButton />
                </div>
            </div>

            {/* Sidebar */}
            <Sidebar isOpen={isOpen} />

            {/* Map Area */}
            <div className="h-full w-full relative z-0">
                <Map />
            </div>
        </div>
    )
}
export default Page;
