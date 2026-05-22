interface SidebarProps {
    isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
    return (
        <div
            className={`absolute top-0 left-0 h-full w-[320px] bg-white/10 backdrop-blur-sm border-r border-gray-200 overflow-y-auto pt-20 px-6 shadow-[4px_0_24px_rgba(0,0,0,0.05)] z-500 flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
        >
            <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>

            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 h-12 flex items-center justify-center text-gray-400 text-sm">
                        Slider placeholder
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Property Type</label>
                    <div className="grid grid-cols-2 gap-2">
                        {['1BHK', '2BHK', '3BHK', 'Villa'].map(type => (
                            <div key={type} className="p-2 bg-gray-50 rounded-lg border border-gray-100 text-center text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 cursor-pointer transition-colors">
                                {type}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;