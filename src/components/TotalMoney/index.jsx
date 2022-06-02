import React from "react"
import { TotalStyle } from "./style"

function TotalMoney({listTransactions}){

    function total(){
        const valorSaida = listTransactions.filter((item)=>item.type === "saída").map((item)=>item.value).reduce((prev, curr) => parseFloat(prev)+parseFloat(curr), 0)
        const valorEntrada = listTransactions.filter((item)=>item.type === "entrada").map((item)=>item.value).reduce((prev, curr) => parseFloat(prev)+parseFloat(curr), 0)
        return (valorEntrada-valorSaida)
    }
    //if(total() !== 0){
    return(
      
      <TotalStyle>
        <div className="container">
          <div className="container-descricao">
            <h3>Valor total:</h3>
            <span>O valor se refere ao saldo</span>
          </div>
          <span>R${total()}</span>
        </div>
        </TotalStyle>
    )
    //}
}
export default TotalMoney