import React from 'react';
import { LuSearch } from 'react-icons/lu';

const SearchBar = () => {
    return (
        <div className="flex justify-center w-full">
            <div className="relative flex items-center w-full max-w-[300px] focus-within:max-w-full h-12 rounded-full shadow-md bg-white overflow-hidden border border-gray-200 focus-within:border-gray-400 focus-within:ring focus-within:ring-gray-400 transition-all duration-500 ease-in-out">
                <div className="grid place-items-center h-full w-12 text-gray-400 shrink-0">
                    <LuSearch size={18} className='text-black'/>
                </div>
                <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-4 bg-transparent"
                    type="text"
                    id="search"
                    placeholder="Search location..." 
                />
            </div>
        </div>
    );
};

export default SearchBar;
