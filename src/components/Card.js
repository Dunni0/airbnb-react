import React from "react";
import CardInfo from "./CardInfo"
import Obj from "./CardObj"

function Card(){
   const item = Obj.map((obj)=> {
         return (
                 <CardInfo 
                 key={obj.id}
                 {...obj}

                // as well use obj={obj} and use as props.obj.objProperty
                 />
    )
   })
    return(
        <div className="card">
             {item}
        </div>
    )
}

export default Card