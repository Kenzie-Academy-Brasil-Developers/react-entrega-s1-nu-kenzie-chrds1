import React, {useState} from "react";
import Card from "../Card";

function List({listTransactions}){
    const[list, setList] = useState(listTransactions)

    function filtro(event){
        if(event.target.value === "Todos"){
            const todos = listTransactions.filter((item)=>item)
            setList(todos)
        }else if(event.target.value === "Entradas"){
            const entradas = listTransactions.filter((item)=>item.type === "entrada")
            setList(entradas)
        }else if(event.target.value === "Saídas"){
            const saidas = listTransactions.filter((item)=>item.type === "saída")
            setList(saidas)
        }
    }


    return(
    <>
    <ul>
        <li onClick={filtro} value="Todos">Todos</li>
        <li onClick={filtro} value="Entradas">Entradas</li>
        <li onClick={filtro} value="Saídas">Saídas</li>
    </ul>
    {list.map((transaction, index) =><Card description={transaction.description} value={transaction.value} type={transaction.type} key={index} />)}
    </>
    )
    
}
export default List