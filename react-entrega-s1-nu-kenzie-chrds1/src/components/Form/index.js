import React, {useState} from "react";
import "./style.css"

function Form({listTransactions, setListTransactions}){
    const [descricao, setDescricao] = useState("")
    const [valor, setValor] = useState(0)
    const [tipoValor, setTipoValor] = useState("")
   
    const transation = {
        description: descricao, 
        type: tipoValor, 
        value: valor
    };

    function handleForm(event){
        event.preventDefault();
        setListTransactions([...listTransactions, transation])
    }
    
    return(
        <form onSubmit={handleForm}>
            <label htmlFor="inputDescricao">Descrição</label>
            <input id="inputDescricao" type="text" placeholder="Descrição" onChange={(event)=> setDescricao(event.target.value)}/>
            <span>Ex: Compra de roupas</span>
            <label htmlFor="inputValor">Valor</label>
            <input id="inputValor" type="number" placeholder="Valor" onChange={(event)=> setValor(event.target.value)}/>
            <label htmlFor="tipoValor">Tipo de valor</label>
            <select id="tipoValor" onChange={(event)=> setTipoValor(event.target.value)}>
                <option value="">selecione</option>
                <option value="entrada">entrada</option>
                <option value="saída">saída</option>
            </select>
            <button type="submit" >Inserir valor</button>

        </form>
    )
}
export default Form