import React from "react";
import "./card.css"

export function Cards({porcentaje, price}){
    return <div className="cont-cards">
        <div className="card">
            <div className="img"></div>
            <h2 className="price">{price}</h2>
            <h4 className="porcentajes">{porcentaje}</h4>
        </div>

    </div>
}