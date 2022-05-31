import React, {useState} from "react";
import Card from "../Card";

function List(props){
    
    props.listTransactions.map((transaction, index) => <Card transaction={transaction} key={index} />)
}
export default List