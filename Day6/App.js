import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import {cloudinary_Image_url, RestaurantList} from "./config";
import Body from "./src/Body";
import Footer from "./src/Footer"









const Applayout=()=>(
    <>
        <Header />
        <Body />
        <Footer />
    </>
)



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);