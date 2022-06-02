import React from "react";
import Card from "../Card";
import { ListStyle } from "./style";

function List({list, setList, listTransactions, setListTransactions}){
    
    function filtro(event){
        if(event.target.innerText === "Todos"){
            const todos = listTransactions.filter((item)=>item)
            return setList(todos)
        }else if(event.target.innerText === "Entradas"){
            const entradas = listTransactions.filter((item)=>item.type === "entrada")
            return setList(entradas)
        }else if(event.target.innerText === "Saídas"){
            const saidas = listTransactions.filter((item)=>item.type === "saída")
            return setList(saidas)
        }
    }
    
    return(
        <ListStyle>
        <div>  
            <ul>
                <li onClick={filtro}>Todos</li>
                <li onClick={filtro}>Entradas</li>
                <li onClick={filtro}>Saídas</li>
            </ul>
            
            {   list.length === 0 || listTransactions.length === 0?
                ([
                    {description:"", type:"", value:""},
                    {description:"", type:"", value:""},
                    {description:"", type:"", value:""}
                ]).map((transaction, index) =><Card filtro={filtro} description={transaction.description} value={transaction.value} type={transaction.type} key={index} list={list} setList={setList} listTransactions={listTransactions} setListTransactions={setListTransactions}/>)
                :
                list.map((transaction, index) =><Card filtro={filtro} description={transaction.description} value={transaction.value} type={transaction.type} key={index} list={list} setList={setList} listTransactions={listTransactions} setListTransactions={setListTransactions}/> )
            }  
        </div>
        </ListStyle>
    )
}
export default List