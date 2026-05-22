"use client"

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { LuAlignHorizontalJustifyStart, LuListFilter } from "react-icons/lu";
import Sidebar from "../components/sidebar/Sidebar";
import { GrAdd } from "react-icons/gr";
import Image from "next/image";
import profile from '@/public/profile.png'
const Map = dynamic(() => import("../components/map/Map"), { ssr: false });


const Page = () => {
    const [isOpen, setIsOpen] = useState(false);

    const OpenSidebar = () => setIsOpen(!isOpen)
    return (
        <div className="h-screen w-full relative overflow-hidden">
            {/* Toggle Button */}
            <div className="absolute top-4 left-4 z-1000">
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
            </div>

            <div className="absolute top-4 right-4 z-1000">
                <div className="relative rounded-full h-10 w-10">
                    <Image
                        src={profile}
                        alt="profile"
                        fill
                        sizes="80px"
                        className="object-cover rounded-full border-2 border-red-600"
                    />
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
