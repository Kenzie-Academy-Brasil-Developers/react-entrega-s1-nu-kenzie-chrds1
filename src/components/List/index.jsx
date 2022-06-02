import React from "react";
import Card from "../Card";
import { ListStyle } from "./style";

function List({list, setList, listTransactions, setListTransactions, filtro}){
        
    return(
        <ListStyle>
        <div className="container">
            <div className="container-botoes">
                <span>Resumo financeiro</span>
                <ul>
                    <li onClick={filtro} className="botao-filtro-todos">Todos</li>
                    <li onClick={filtro} className="botao-filtro">Entradas</li>
                    <li onClick={filtro} className="botao-filtro">Saídas</li>
                </ul>
            </div>
            {list.legth ===0 || listTransactions.length === 0? <span className="span-mensagem">Você ainda não possui lançamentos</span>:""}
            <div>
            {   list.length === 0?
                ([
                    {description:"", type:"", value:""},
                    {description:"", type:"", value:""},
                    {description:"", type:"", value:""}
                ]).map((transaction, index) =><Card filtro={filtro} description={transaction.description} value={transaction.value} type={transaction.type} key={index} list={list} setList={setList} listTransactions={listTransactions} setListTransactions={setListTransactions}/>)
                :
                list.map((transaction, index) =><Card filtro={filtro} description={transaction.description} value={transaction.value} type={transaction.type} key={index} list={list} setList={setList} listTransactions={listTransactions} setListTransactions={setListTransactions}/> )
            }  
            </div>
        </div>
        </ListStyle>
    )
}
export default List