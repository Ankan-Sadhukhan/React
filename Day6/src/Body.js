import {RestaurantList} from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";


function filterData(searchText,restaurants){
    return (
        restaurants.filter((r) =>
        r?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())))
}


const Body =()=>{

    //avoid rendering

    const [searchText,setsearchText] = useState("");
    const [filteredRestaurants,setfilteredRestaurants] =useState([]);
    const [AllRestaurant,setAllRestaurant] = useState([]);

    useEffect(()=>
    getRestaurant(),[]);

    async function getRestaurant(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5574337&lng=88.4077233&page_type=DESKTOP_WEB_LISTING")
        const json= await data.json();
        console.log(json);
        setAllRestaurant(json?.data?.cards[2]?.data?.data?.cards);
        setfilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    //not render component(early return)
    if(!AllRestaurant.length) return null;

    if(filteredRestaurants?.length===0)
    return <h1>No Restaurant match Your Filter!!</h1>

    return (AllRestaurant?.length ===0)? <Shimmer /> :(
    
    <>
   
    <div className="search-container">
        <input type="text" className="search-box" placeholder="search" value={searchText} onChange={(e)=>setsearchText(e.target.value)}>
        </input>
        <button className="search-btn" onClick={()=>{
            const data=filterData(searchText,AllRestaurant);
            setfilteredRestaurants(data)}
        } >search</button>
    </div>
        <div className="body"> 
        {/* // no restaurant match logic here */}
            {
            filteredRestaurants.map((restaurant)=>{
                return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>
            })
        }
        </div>
    </>
    )
}

export default Body;