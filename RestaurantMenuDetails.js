import { useState } from "react";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenuDetails = ({data, setShowIndex,showItems}) => {
    const dothis = () => {
        setShowIndex();
    };
    return (
        // this is acordian heading
        <div className="w-6/12 bg-gray-50-400 shadow-lg my-2 mx-auto py-4  px-3 ">
            <div className="flex justify-between cursor-pointer" onClick={dothis} ><span className="font-semibold">{data.title} ({data.itemCards.length})</span>
            <span>⬇️</span></div>
            { showItems && <RestaurantCategories catdata={data.itemCards}/>}
        </div>
        // this is accordian body
    )
}


export default RestaurantMenuDetails;