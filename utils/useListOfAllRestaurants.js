import { useEffect, useState } from "react"



const useListOfAllRestaurants = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState("");
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData= async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData=await data.json();
        setListOfRestaurants(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    };
    console.log(listOfRestaurants);
    return listOfRestaurants;
}


export default useListOfAllRestaurants;