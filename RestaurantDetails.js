import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menu_ID } from "../utils/constants";
import useRestaurantsInfo from "../utils/useRestaurantsInfo";
import RestaurantMenuDetails from "./RestaurantMenuDetails";

const RestaurantDetails = () => {

    const {resId} = useParams();
    const restaurantsInfo = useRestaurantsInfo(resId);
    const [showIndex,setShowIndex]= useState(null);
    /*const [restaurantsInfo, setRestaurantsInfo] = useState("");
    useEffect(()=>{
        fetchMenu();
    },[]);
    const fetchMenu= async ()=> {
        const data = await fetch( menu_ID+ resId);  
        const jsonData= await data.json();
        //console.log(jsonData);
        setRestaurantsInfo(jsonData);
    }*/
    if (restaurantsInfo.length=== 0 ) return <Shimmer />;
    //console.log(restaurantsInfo);
    const {name,cuisines} = restaurantsInfo?.data?.cards[0]?.card?.card?.info;
    const { itemCards } = restaurantsInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const categories= restaurantsInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x)=>x.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);


    return (
        <div className="text-center">
            <h1 className="font-bold mt-4 ">{name}</h1>
            <p className="mt-2">{cuisines.join(", ") }</p>
            {categories.map((category,index)=><RestaurantMenuDetails data={category?.card?.card} showItems={index===showIndex?true:false} 
            setShowIndex={()=> setShowIndex(index)}
            />)}
        </div>
    )
}

export default RestaurantDetails;