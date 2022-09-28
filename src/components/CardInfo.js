import React from "react";

function CardInfo(props){

    let badgeText
    if (props.open_spots === 0){
        badgeText = "SOLD OUT"
    } else if (props.status === "Available"){
        badgeText = "AVAILABLE"
    } 

    return(
        <div className="cardInfo">
            <div>
                <img className="cardImage" src={require(`../images/${props.image}`)} alt={props.alt}/>
                {badgeText && <p className="cardImageText">{badgeText}</p>}

             </div>
             <div className="cardStats">
                 <img className="star" src={require("../images/Star1.png")} alt="star"/>
                 <span> {props.span1} </span>
                 <span className="gray"> {props.span2}</span>
                 <span className="gray"> {props.span3}</span>
            </div>
            <p> {props.p1}</p>
            <p> <span className="bold"> From {props.p2} </span> / person </p>
        </div>
    )

}

export default CardInfo;