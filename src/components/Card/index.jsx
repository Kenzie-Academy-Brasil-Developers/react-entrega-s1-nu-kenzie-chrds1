import React from "react"
import {FaTrash} from "react-icons/fa"
import {CardStyle} from "./style"

function Card({description, value, type, list, setList, listTransactions, setListTransactions}){
    const color = type === "entrada"? "#03B898": "#E9ECEF";
    const descricaoBackground = description.length > 0? "#F8F9FA": "#E9ECEF";
    const descricaoWidth = description.length > 0? "50%": "auto";

    function deletarCard(event){
        if(listTransactions.length>0){
        const filter = listTransactions.filter(item=> item.description !== event.currentTarget.id)
        setList(filter)
        setListTransactions(filter)
        }
    }
  
    return(
        <CardStyle colorBorder={color} descricaoBackground={descricaoBackground} descricaoWidth={descricaoWidth}>
        <div className="container-card">
            <div className="descricao">
                <h2>{description}</h2>
                <span>{type}</span>
            </div>
            <div className="value">
                <span>{value}</span>
            </div>
            <div>
                <FaTrash id={description} onClick={deletarCard}/>
            </div>
        </div>
        </CardStyle>
    )
}
export default Card