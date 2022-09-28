import React from "react";

function Nav({image, alt}){
    return(
        <nav>
            <img src={image}
                 alt={alt}
            />
        </nav>
    )
}

export default Nav