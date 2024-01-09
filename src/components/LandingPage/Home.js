import React from 'react'
// import headerImage from '../../assets/foodWall.jpg';
import Header from './Header';
import HeaderShowcase from './HeaderShowcase';
import { useState, useEffect } from 'react';
import Restuarant from './Restuarants/Restuarant';
import Footer from './Footer';



function Home() {

    const [listOfResturants, setListOfResturnts] = useState([]);
    const [filterResturants, setFilterResturants] = useState([]);



    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.680619997448414&lng=77.4815347418189&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        console.log(jsonData);
        setListOfResturnts(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResturants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    return (

        <div className='w-full '>
            <Header></Header>
            <HeaderShowcase></HeaderShowcase>
            <Restuarant filterResturants={filterResturants}></Restuarant>
            <Footer></Footer>
        </div>

    )
}

export default Home;