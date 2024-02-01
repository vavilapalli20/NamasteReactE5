import { useEffect, useState } from "react"
import { menu_ID } from "./constants";

const useRestaurantsInfo = (resId) => {
    const [restaurantsInfo , setRestaurantsInfo] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async() => {
        const data= await fetch( menu_ID + resId);
        const jsonData= await data.json();
        setRestaurantsInfo(jsonData);
    };
    return restaurantsInfo;

}

export default useRestaurantsInfo;