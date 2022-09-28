import React from "react";
import Nav from "./Nav";
import Hero from "./Hero";
import Card from "./Card"
import logo_image from "../images/airbnb.png"

function Main(){
    return(
        <div className="mainContainer">
        <Nav image={logo_image} alt="logo image"/>
        <Hero />
        <Card />
        </div>
    )
}

export default Main