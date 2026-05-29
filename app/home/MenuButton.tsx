"use client"

import React, { useState, useEffect, useRef } from 'react';
import { IoMenu } from 'react-icons/io5';
import { 
    LuHeart, 
    LuUser, 
    LuBell, 
    LuMessageSquare, 
    LuUsers, 
    LuLogOut,
    LuChevronRight
} from 'react-icons/lu';

const options = [
    { name: "wishlist", icon: <LuHeart size={18} /> },
    { name: "profile", icon: <LuUser size={18} /> },
    { name: "notification", icon: <LuBell size={18} /> },
    { name: "message", icon: <LuMessageSquare size={18} /> },
    { name: "find your room partner", icon: <LuUsers size={18} /> },
    { name: "logout", icon: <LuLogOut size={18}/> },
];

const MenuButton = () => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    // Format option names to capitalize words nicely
    const formatName = (name: string) => {
        return name
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className="relative" ref={containerRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center cursor-pointer border rounded-full shadow-md p-2 hover:scale-95 hover:shadow-lg transition-all duration-300 ${
                    isOpen 
                        ? 'bg-gray-100 border-gray-300 rotate-90 scale-95' 
                        : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-50'
                }`}
                aria-label="Menu"
            >
                <IoMenu size={22} />
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-3 w-64 bg-white/95 backdrop-blur-md border border-gray-100 rounded-2xl shadow-xl py-2 z-9999 animate-drop-down transform origin-top-right">
                    <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Account & Activities</p>
                    </div>
                    
                    <div className="flex flex-col">
                        {options.map((option, index) => {
                            const isLogout = option.name === "logout";
                            return (
                                <React.Fragment key={option.name}>
                                    {/* Add a beautiful divider before Logout */}
                                    {isLogout && <div className="h-px bg-gray-100 my-1 mx-2" />}
                                    
                                    <button
                                        onClick={() => {
                                            console.log(`Clicked on ${option.name}`);
                                            setIsOpen(false);
                                        }}
                                        className={`group flex items-center justify-between px-4 py-3 text-sm text-left transition-all duration-200 cursor-pointer ${
                                            isLogout 
                                                ? 'text-rose-600 hover:bg-rose-50/50' 
                                                : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                                        }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span className="flex items-center justify-center shrink-0">
                                                {option.icon}
                                            </span>
                                            <span className={`font-medium ${isLogout ? 'font-semibold' : ''}`}>
                                                {formatName(option.name)}
                                            </span>
                                        </div>
                                        <LuChevronRight size={14} className="text-gray-300 group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all duration-200" />
                                    </button>
                                </React.Fragment>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuButton;
