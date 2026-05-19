import React from 'react'
import Map from "../components/map/Map";

const Page = () => {
    return (
        <div className="grid grid-cols-[25%_75%] h-screen">
            <div className="">20%</div>
            <div className="">{<Map/>}</div>
        </div>
    )
}
export default Page;
