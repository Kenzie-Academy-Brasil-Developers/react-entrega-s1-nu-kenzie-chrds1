import React from "react"
import {FaTrash} from "react-icons/fa"
import {CardStyle} from "./style"

function Card({description, value, type, key}){
    const color = type === "entrada"? "#03B898": "#E9ECEF";

    return(
        <CardStyle colorBorder={color}>
        <div className="container-card" key={key}>
            <div className="descricao">
                <span>{description}</span>
                <span>{type}</span>
            </div>
            <div className="value">
                <span>{value}</span>
            </div>
            <div>
                <FaTrash/>
            </div>
        </div>
        </CardStyle>
    )
}
export default Card