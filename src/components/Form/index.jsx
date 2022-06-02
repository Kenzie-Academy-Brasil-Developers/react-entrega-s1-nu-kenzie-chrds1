import React, {useState} from "react";
import { FormStyle } from "./style";

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
        <FormStyle>
        <div>
            <form onSubmit={handleForm}>
                <div className="container-descricao">
                    <label htmlFor="inputDescricao">Descrição</label>
                    <input id="inputDescricao" type="text" placeholder="Digite sua descrição" onChange={(event)=> setDescricao(event.target.value)}/>
                    <span>Ex: Compra de roupas</span>
                </div>
                <div className="container-div">
                    <div className="container-valor">
                        <label htmlFor="inputValor">Valor</label>
                        <input id="inputValor" type="number" placeholder="1" onChange={(event)=> setValor(event.target.value)}/>
                    </div>
                    <div className="container-tipo">
                        <label htmlFor="tipoValor">Tipo de valor</label>
                        <select id="tipoValor" onChange={(event)=> setTipoValor(event.target.value)}>
                            <option value="">selecione</option>
                            <option value="entrada">entrada</option>
                            <option value="saída">saída</option>
                        </select>
                    </div>
                </div>
                <button type="submit" >Inserir valor</button>
            </form>
        </div>
        </FormStyle>
    )
}
export default Form