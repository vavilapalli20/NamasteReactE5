import { useEffect, useState } from "react";
import resList from "../utils/mockData";
import RestroContainer from "./RestroContainer";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListOfAllRestaurants from "../utils/useListOfAllRestaurants";

const Body =() =>{
 // const listOfRestaurants  = useListOfAllRestaurants([]); // instead fir its useState(resList)
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredData , setFilteredData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect( ()=>{fetchData();} , []);
  useEffect(()=> console.log("useEffect called"),[]);

  const fetchData = async()=> {
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const jsonData= await data.json();
    console.log(jsonData);
    setListOfRestaurants(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredData(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
  }
    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
        <div className="Filter flex">
          <div className="searchComponent m-1 p-4">
            <input type="text" className=" border border-solid border-black" onChange={(x) => { setSearchValue(x.target.value); } } />
            <button className="searchBtn bg-green-100 px-4 m-4 py-2 rounded-lg" onClick={ ()=>{
              const newData= listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchValue.toLowerCase())
              );
              console.log(newData);
              setFilteredData(newData);
            }}
            >search</button>
          </div>
          <div className="filtered mt-9">
          <button className="filter-option px-4 py-2 bg-blue-100 rounded-lg"
            onClick={() => {
              const fiteredData = listOfRestaurants.filter(
                (restaurants) => restaurants.info.avgRating >= 4.4
              );
              setListOfRestaurants(fiteredData);
            } }
          > Top-Rated Restaurants</button>
        </div>
      </div>
      <div className="resto-cintainere flex flex-wrap items-center">
          {filteredData.map((res) => (
            <Link key={res.info.id} 
             to={"/restaurants/" + res.info.id}><RestroContainer resData={res} /></Link>
          ))}
        </div>
        </div>
    );
};

export default Body;