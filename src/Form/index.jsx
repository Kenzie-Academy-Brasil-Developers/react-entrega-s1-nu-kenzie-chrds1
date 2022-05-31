import React, {useState} from "react";

function Form(){



    return(
        <form onSubmit={(event)=>{
            event.preventDefault();
            
        }}>
            <input type="number" placeholder="Valor"/>
            <input type="text" placeholder="Descrição"/>
            <select placeholder="escolha">
                <option value="entrada">entrada</option>
                <option value="saida">saida</option>
            </select>
            <button type="submit">Inserir valor</button>

        </form>
    )
}
export default Form